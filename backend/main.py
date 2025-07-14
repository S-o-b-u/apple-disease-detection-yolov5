from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from detect import detect_disease
from report import generate_report
from speak import speak_text  # ✅ use voice instead of text translation

app = FastAPI()

# ✅ Allow frontend connections (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],     # For all origins; restrict to frontend domain in production
    allow_methods=["*"],
    allow_headers=["*"]
)

# ✅ Serve /static for images, PDFs, and audio files
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    # ✅ 1. Detect disease and get annotated image
    image_path, disease, treatment = detect_disease(file)

    # ✅ 2. Generate PDF report (with image)
    report_file = generate_report(disease, treatment, image_path=image_path)

    # ✅ 3. Generate Hindi voice for treatment suggestion
    audio_file = speak_text(treatment, lang='hi')

    # ✅ 4. Return full response
    return {
        "image_url": f"/static/{image_path}",
        "report_url": f"/static/{report_file}",
        "disease": disease,
        "treatment": treatment,
        "audio_url": f"/static/{audio_file}"  # ✅ audio instead of translated text
    }
