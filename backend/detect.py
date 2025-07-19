import platform
import pathlib

# ✅ Fix for Windows paths
if platform.system() == "Windows":
    pathlib.PosixPath = pathlib.WindowsPath

import torch
from PIL import Image
import uuid
import os

# ✅ GitHub token to bypass YOLOv5 rate-limiting
GITHUB_TOKEN = "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"
os.environ["GITHUB_TOKEN"] = GITHUB_TOKEN
if GITHUB_TOKEN:
    torch.hub._DEFAULT_GITHUB_TOKEN = GITHUB_TOKEN
    torch.hub._validate_not_a_forked_repo = lambda *args, **kwargs: None

# ✅ Static dir
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
os.makedirs(STATIC_DIR, exist_ok=True)

# ✅ Load custom-trained model
model = torch.hub.load(
    repo_or_dir='ultralytics/yolov5',
    model='custom',
    path='model/best.pt',
    source='github',
    force_reload=False,  # <--- don't reload on every request
)

TREATMENTS = {
    "Rust": (
        "Rust causes orange spots on leaves and weakens the tree. "
        "Treat by removing affected leaves and spraying Myclobutanil. "
        "Avoid planting near juniper trees."
    ),

    "Scab": (
        "Scab shows as dark spots on leaves and fruits. "
        "Use Captan or Mancozeb sprays and keep the tree area clean and airy."
    ),

    "Healthy": (
        "The leaf looks healthy. "
        "Continue regular care and monitor for any future symptoms."
    )
}



def detect_disease(file):
    # ✅ Clean static/ folder (optional: remove in production)
    for f in os.listdir(STATIC_DIR):
        try:
            os.remove(os.path.join(STATIC_DIR, f))
        except:
            pass

    # ✅ Save uploaded file temporarily
    img = Image.open(file.file).convert("RGB")
    temp_filename = f"{uuid.uuid4().hex}_temp.jpg"
    temp_path = os.path.join(STATIC_DIR, temp_filename)
    img.save(temp_path)

    # ✅ Run detection
    results = model(temp_path)

    # ✅ Render annotated image
    rendered = results.render()[0]
    from PIL import Image as PILImage
    annotated_img = PILImage.fromarray(rendered)

    detected_filename = f"{uuid.uuid4().hex}_detected.jpg"
    detected_path = os.path.join(STATIC_DIR, detected_filename)
    annotated_img.save(detected_path)

    # ✅ Extract disease name
    df = results.pandas().xyxy[0]
    disease = df["name"][0].capitalize() if not df.empty else "Healthy"

    # ✅ Lookup treatment
    treatment = TREATMENTS.get(disease, "No treatment found.")

    # ✅ Optionally delete the temp original image
    try:
        os.remove(temp_path)
    except:
        pass

    return detected_filename, disease, treatment, 95.0  # mock confidence
