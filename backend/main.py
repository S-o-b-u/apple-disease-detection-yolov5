from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
import os

from detect import detect_disease
from report import generate_report
from speak import speak_text

app = FastAPI()

# ✅ Allow frontend domain in CORS (change "*" to specific domain in production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ✅ Your frontend dev URL
    allow_methods=["*"],
    allow_headers=["*"]
)

# ✅ Mount static directory
STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# ✅ Helper to build full URL for static files
def build_static_url(path: str) -> str:
    return f"http://localhost:8000/static/{path}"

@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    # ✅ 1. Run detection
    image_path, disease, treatment = detect_disease(file)

    # ✅ 2. Generate report
    report_file = generate_report(disease, treatment, image_path=image_path)

    # ✅ 3. Generate Hindi voice
    audio_file = speak_text(treatment, lang='hi')

    # ✅ 4. Respond with structured detection result
    return JSONResponse([{
        "disease": disease,
        "confidence": 0.95,
        "severity": "Medium",
        "coordinates": {
            "x": 100,
            "y": 100,
            "width": 200,
            "height": 200
        },
        "imageUrl": build_static_url(os.path.basename(image_path)),
        "reportUrl": build_static_url(os.path.basename(report_file)),
        "treatment": {
            "title": f"{disease} Treatment",
            "description": treatment.split('\n')[0] if '\n' in treatment else treatment,
            "steps": treatment.split('\n')[1:] if '\n' in treatment else [treatment],
            "audioUrl": build_static_url(audio_file)
        }
    }])

