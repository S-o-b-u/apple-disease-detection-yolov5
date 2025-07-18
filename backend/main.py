from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
import os

from detect import detect_disease
from report import generate_report
from speak import speak_text

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Serve static files
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

def build_static_url(filename: str) -> str:
    return f"http://localhost:8000/static/{filename}"

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    # Step 1: Detection
    original_filename, annotated_filename, disease, treatment, confidence = detect_disease(file)

    # Step 2: Report PDF
    report_filename = generate_report(
        disease,
        treatment,
        original_filename=original_filename,
        detected_filename=annotated_filename,
        confidence=confidence
    )

    # Step 3: Hindi Audio
    audio_filename = speak_text(treatment, lang="hi")

    # Step 4: JSON Response
    response = {
        "disease": disease,
        "confidence": confidence,
        "severity": "Medium",  # Placeholder
        "coordinates": {
            "x": 100, "y": 100, "width": 200, "height": 200  # Placeholder
        },
        "imageUrl": build_static_url(annotated_filename),
        "originalUrl": build_static_url(original_filename),
        "reportUrl": build_static_url(report_filename),
        "treatment": {
            "title": f"{disease} Treatment",
            "description": treatment.split('\n')[0] if '\n' in treatment else treatment,
            "steps": treatment.split('\n')[1:] if '\n' in treatment else [treatment],
            "audioUrl": build_static_url(audio_filename)
        }
    }

    return JSONResponse([response])
