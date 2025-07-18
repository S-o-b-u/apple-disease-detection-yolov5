from fpdf import FPDF
from PIL import Image
import uuid
import os

def safe(text):
    return text.replace("–", "-").replace("—", "-").replace("“", '"').replace("”", '"')

DISEASE_DETAILS = {
    "Rust": {
        "description": "Apple rust is a fungal disease that produces rust-colored lesions on leaves, weakening the plant and potentially reducing fruit quality.",
        "fungicides": ["Myclobutanil", "Propiconazole"],
        "steps": [
            "Carefully remove and discard all visibly infected leaves to reduce fungal spread.",
            "Spray a fungicide like Myclobutanil as early as signs of infection appear to control the disease.",
            "Continue spraying every 10–14 days during humid or rainy seasons for sustained protection.",
            "Avoid planting junipers nearby, as they serve as alternate hosts for the rust pathogen."
        ],
        "prevention": [
            "Plant rust-resistant apple cultivars whenever possible.",
            "Prune branches regularly to improve airflow and reduce moisture accumulation.",
            "Avoid overhead watering which keeps leaves wet and favors fungal growth."
        ]
    },
    "Scab": {
        "description": "Apple scab appears as dark, velvety lesions on leaves and fruit, often leading to premature leaf drop and poor fruit development.",
        "fungicides": ["Captan", "Mancozeb"],
        "steps": [
            "Clean up and dispose of fallen leaves and debris from the orchard floor to minimize infection sources.",
            "Begin fungicide treatment (e.g., Captan or Mancozeb) during the green tip stage for best results.",
            "Reapply fungicide every 7 to 10 days, especially in wet conditions, to protect new growth.",
            "Thin dense tree canopies to increase sunlight penetration and reduce humidity."
        ],
        "prevention": [
            "Opt for scab-resistant varieties to lower risk of infection.",
            "Provide adequate spacing between trees to improve air circulation.",
            "Avoid composting infected leaves near orchard areas."
        ]
    },
    "Healthy": {
        "description": "No signs of disease were detected. The leaf appears healthy, suggesting good orchard maintenance and environmental conditions.",
        "fungicides": [],
        "steps": [],
        "prevention": [
            "Regularly inspect plants for early symptoms of disease or stress.",
            "Keep the orchard clean and well-maintained to discourage pests and pathogens.",
            "Apply fungicides only when environmental risk factors are high."
        ]
    }
}

def generate_report(disease, treatment, original_filename, detected_filename, confidence=None):
    pdf = FPDF(orientation='L', unit='mm', format='A4')
    pdf.add_page()
    pdf.set_auto_page_break(auto=False)

    # Background
    pdf.set_fill_color(245, 240, 230)
    pdf.rect(0, 0, 297, 210, 'F')

    # Border
    pdf.set_draw_color(92, 68, 56)
    pdf.set_line_width(1)
    pdf.rect(5, 5, 287, 200)

    # Logos
    try:
        pdf.image("assets/yolov5_logo.png", x=10, y=8, w=20)
    except:
        pdf.set_xy(10, 8)
        pdf.set_font("Arial", 'B', 11)
        pdf.cell(25, 10, "[YOLOv5]")

    try:
        pdf.image("assets/gnit_logo.png", x=265, y=8, w=20)
    except:
        pdf.set_xy(260, 8)
        pdf.set_font("Arial", 'B', 11)
        pdf.cell(25, 10, "[GNIT]")

    # Title
    pdf.set_font("Arial", 'B', 22)
    pdf.set_text_color(0)
    pdf.cell(0, 16, "AI-Powered Crop Disease Diagnosis", ln=True, align='C')

    pdf.set_font("Arial", '', 13)
    pdf.set_text_color(80)
    pdf.cell(0, 8, "Ensuring crop health through early and accurate disease identification.", ln=True, align='C')
    pdf.ln(2)

    # Left Section
    x_left = 10
    y_start = 38
    pdf.set_xy(x_left, y_start)

    details = DISEASE_DETAILS.get(disease, {})

    pdf.set_font("Arial", 'B', 12)
    pdf.set_text_color(0)
    pdf.cell(140, 6, f"Disease Detected: {disease}", ln=True)

    if confidence:
        pdf.set_font("Arial", '', 12)
        pdf.cell(140, 7, f"Confidence: {confidence}%", ln=True)

    if treatment:
        pdf.set_font("Arial", '', 12)
        pdf.multi_cell(140, 6, f"Suggested Treatment: {safe(treatment)}")
        pdf.ln(1)

    def write_section(title, items, numbered=False, max_lines=3):
        if items:
            pdf.set_font("Arial", 'B', 13)
            pdf.cell(140, 7, title, ln=True)
            pdf.set_font("Arial", '', 12)
            for i, item in enumerate(items[:max_lines], 1):
                prefix = f"{i}. " if numbered else "- "
                pdf.multi_cell(140, 6, prefix + safe(item))
            pdf.ln(1)

    write_section("Description:", [details.get("description")] if details.get("description") else [], max_lines=1)
    write_section("Recommended Fungicides:", details.get("fungicides", []), max_lines=2)
    write_section("Treatment Steps:", details.get("steps", []), numbered=True, max_lines=3)
    write_section("Prevention Tips:", details.get("prevention", []), numbered=True, max_lines=3)

    # Right Section: Images
    def add_image_section(img_path, label, current_y):
        if not os.path.exists(img_path):
            pdf.set_xy(170, current_y)
            pdf.set_font("Arial", 'I', 11)
            pdf.cell(110, 10, f"{label} not available.", ln=True)
            return current_y + 16

        try:
            with Image.open(img_path) as img:
                w, h = img.size
                max_w = 110
                max_h = 60
                ratio = min(max_w / w, max_h / h)
                img_w = w * ratio
                img_h = h * ratio
                img_x = 170 + (110 - img_w) / 2
                label_y = current_y + 2

                pdf.set_font("Arial", 'B', 12)
                pdf.set_xy(img_x, label_y)
                pdf.cell(img_w, 7, label, ln=True, align='C')

                image_y = label_y + 9
                pdf.set_draw_color(70, 70, 70)
                pdf.set_line_width(0.4)
                pdf.rect(img_x - 1, image_y - 1, img_w + 2, img_h + 2)
                pdf.image(img_path, x=img_x, y=image_y, w=img_w, h=img_h)

                return image_y + img_h + 4
        except:
            pdf.set_xy(170, current_y)
            pdf.set_font("Arial", 'I', 11)
            pdf.cell(110, 10, f"{label} could not be loaded.", ln=True)
            return current_y + 16

    img_y = 44
    img_y = add_image_section(os.path.join("static", original_filename), "Original Image", img_y)
    img_y = add_image_section(os.path.join("static", detected_filename), "Annotated Image", img_y)

    # Footer
    pdf.set_y(195)
    pdf.set_font("Arial", 'I', 10)
    pdf.set_text_color(90)
    pdf.cell(0, 10, u"\u00A9 Plant AI | Generated by Team SixthSense", align='C')

    # Save
    filename = f"{uuid.uuid4().hex}.pdf"
    pdf.output(os.path.join("static", filename))
    return filename
