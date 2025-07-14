import platform
import pathlib
import torch
from PIL import Image
import uuid
import os

# ✅ Fix for Windows: prevent PosixPath errors
if platform.system() == "Windows":
    pathlib.PosixPath = pathlib.WindowsPath

# ✅ Set up static/ directory to save images
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
os.makedirs(STATIC_DIR, exist_ok=True)

# ✅ Load the YOLOv5 model from torch.hub
model = torch.hub.load(
    'ultralytics/yolov5',         # source repo
    'custom',                     # model type
    path='model/best.pt',         # your trained weights
    source='github',              # download if not present
    force_reload=True             # force re-download if needed
)

# ✅ Dictionary of treatments
TREATMENTS = {
    "Rust": "Use Myclobutanil fungicide. Remove infected leaves.",
    "Scab": "Use Captan or Mancozeb fungicides.",
    "Healthy": "No disease detected."
}

def detect_disease(file):
    # ✅ Clean up old files in static/
    for f in os.listdir(STATIC_DIR):
        try:
            os.remove(os.path.join(STATIC_DIR, f))
        except Exception:
            pass

    # ✅ Save uploaded image
    img = Image.open(file.file).convert("RGB")
    image_name = f"{uuid.uuid4().hex}.jpg"
    image_path = os.path.join(STATIC_DIR, image_name)
    img.save(image_path)

    # ✅ Run model prediction
    results = model(input_path)

    # ✅ Render bounding boxes on image
    rendered = results.render()[0]
    from PIL import Image as PILImage
    rendered_img = PILImage.fromarray(rendered)
    rendered_img.save(input_path)

    # ✅ Parse prediction
    df = results.pandas().xyxy[0]
    disease = "Healthy" if df.empty else df["name"][0].capitalize()

    # ✅ Treatment suggestion
    treatment = TREATMENTS.get(disease, "No treatment found.")

    return image_name, disease, treatment
