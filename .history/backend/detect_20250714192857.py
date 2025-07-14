import platform
import pathlib

# ✅ Fix for Windows to avoid PosixPath error
if platform.system() == "Windows":
    pathlib.PosixPath = pathlib.WindowsPath

import torch
from PIL import Image
import uuid
import os
import requests

# ✅ Manually patch torch.hub to use token for authentication
GITHUB_TOKEN = "github access token"
os.environ["GITHUB_TOKEN"] = GITHUB_TOKEN
if GITHUB_TOKEN:
    torch.hub._DEFAULT_GITHUB_TOKEN = GITHUB_TOKEN
    torch.hub._validate_not_a_forked_repo = lambda *args, **kwargs: None  # Optional: disable fork validation if needed

# ✅ Define static directory path (inside /backend/static)
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
os.makedirs(STATIC_DIR, exist_ok=True)

# ✅ Load the YOLOv5 model (custom-trained weights)
model = torch.hub.load(
    repo_or_dir='ultralytics/yolov5',
    model='custom',
    path='model/best.pt',
    source='github',
    force_reload=True,
)

TREATMENTS = {
    "Rust": "Use Myclobutanil fungicide. Remove infected leaves.",
    "Scab": "Use Captan or Mancozeb fungicides.",
    "Healthy": "No disease detected."
}

def detect_disease(file):
    # ✅ Clean static/ folder
    for f in os.listdir(STATIC_DIR):
        file_path = os.path.join(STATIC_DIR, f)
        try:
            os.remove(file_path)
        except Exception:
            pass

    # ✅ Save uploaded image
    img = Image.open(file.file).convert("RGB")
    image_name = f"{uuid.uuid4().hex}.jpg"
    input_path = os.path.join(STATIC_DIR, image_name)
    img.save(input_path)

    # ✅ Run detection
    results = model(input_path)

    # ✅ Render image with bounding boxes in memory
    rendered = results.render()[0]  # returns numpy array

    # ✅ Save rendered image manually — no YOLO .save() used
    from PIL import Image as PILImage
    rendered_image = PILImage.fromarray(rendered)
    rendered_image.save(input_path)  # overwrite original image

    # ✅ Extract disease name
    df = results.pandas().xyxy[0]
    if df.empty:
        disease = "Healthy"
    else:
        disease = df["name"][0].capitalize()

    # ✅ Treatment lookup
    treatment = TREATMENTS.get(disease, "No treatment found.")

    return image_name, disease, treatment
