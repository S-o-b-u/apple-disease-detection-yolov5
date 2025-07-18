from fpdf import FPDF
import uuid
import os

# ✅ Unicode-safe text converter
def safe(text):
    return text.replace("–", "-").replace("—", "-").replace("“", '"').replace("”", '"')

# ✅ Disease info dictionary
DISEASE_DETAILS = {
    "Rust": {
        "description": "Apple rust is a fungal disease that causes orange or rust-colored spots on leaves, leading to premature leaf drop and reduced fruit yield.",
        "fungicides": ["Myclobutanil", "Propiconazole"],
        "steps": [
            "Identify and remove infected leaves from the tree.",
            "Apply a fungicide like myclobutanil at the early stage of the infection.",
            "Repeat the spray every 10-14 days during the growing season.",
            "Avoid planting juniper species near apple trees, as they are alternate hosts for rust."
        ],
        "prevention": [
            "Plant rust-resistant apple varieties.",
            "Maintain good air circulation by pruning.",
            "Avoid overhead irrigation."
        ]
    },
    "Scab": {
        "description": "Apple scab causes dark, scabby lesions on leaves and fruit. It reduces yield and makes apples unmarketable.",
        "fungicides": ["Captan", "Mancozeb"],
        "steps": [
            "Remove and destroy fallen infected leaves and fruit.",
            "Apply fungicides at the green tip stage.",
            "Continue spraying at 7-10 day intervals.",
            "Ensure proper pruning to allow sunlight penetration."
        ],
        "prevention": [
            "Plant scab-resistant apple varieties.",
            "Use proper spacing between trees for airflow.",
            "Rake and compost leaves far from the orchard."
        ]
    },
    "Healthy": {
        "description": "No disease detected. This is a healthy apple leaf.",
        "fungicides": [],
        "steps": [],
        "prevention": [
            "Continue regular monitoring of leaves.",
            "Maintain good orchard hygiene.",
            "Apply preventive sprays only if needed."
        ]
    }
}

def generate_report(disease, treatment, image_path=None):
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()
    pdf.set_font("Arial", 'B', 16)
    pdf.cell(0, 10, safe("Apple Leaf Disease Diagnosis Report"), ln=True, align='C')

    pdf.ln(5)
    pdf.set_font("Arial", '', 12)

    # Disease Detected
    pdf.set_font("Arial", 'B', 12)
    pdf.cell(0, 10, safe(f"Disease Detected: {disease}"), ln=True)
    pdf.set_font("Arial", '', 12)

    details = DISEASE_DETAILS.get(disease, {})
    pdf.ln(3)

    # Description
    description = details.get("description", "")
    if description:
        pdf.multi_cell(0, 8, safe(description))
        pdf.ln(2)

    # Fungicides
    fungicides = details.get("fungicides", [])
    if fungicides:
        pdf.set_font("Arial", 'B', 12)
        pdf.cell(0, 10, safe("Recommended Fungicides:"), ln=True)
        pdf.set_font("Arial", '', 12)
        for f in fungicides:
            pdf.cell(0, 8, safe(f"- {f}"), ln=True)
        pdf.ln(2)

    # Treatment Steps
    steps = details.get("steps", [])
    if steps:
        pdf.set_font("Arial", 'B', 12)
        pdf.cell(0, 10, safe("Treatment Steps:"), ln=True)
        pdf.set_font("Arial", '', 12)
        for step in steps:
            pdf.multi_cell(0, 8, safe(f"-> {step}"))
        pdf.ln(2)

    # Prevention Tips
    tips = details.get("prevention", [])
    if tips:
        pdf.set_font("Arial", 'B', 12)
        pdf.cell(0, 10, safe("Prevention Tips:"), ln=True)
        pdf.set_font("Arial", '', 12)
        for tip in tips:
            pdf.multi_cell(0, 8, safe(f"- {tip}"))
        pdf.ln(3)

    # Annotated Image
    if image_path:
        full_image_path = os.path.join("static", image_path)
        if os.path.exists(full_image_path):
            try:
                pdf.set_font("Arial", 'B', 12)
                pdf.cell(0, 10, safe("Annotated Image:"), ln=True)
                pdf.image(full_image_path, x=30, w=150)  # scaled to fit nicely
            except RuntimeError:
                pdf.cell(0, 10, "(Unable to embed image)", ln=True)

    # Save the report
    filename = f"{uuid.uuid4().hex}.pdf"
    pdf.output(os.path.join("static", filename))
    return filename