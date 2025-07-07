# 🍎 Apple Leaf Disease Detection using YOLOv5

A deep learning-based system to detect and classify apple leaf diseases using the YOLOv5 object detection model. This project aims to help in early identification of leaf diseases such as **scab**, **rust**, and differentiate them from **healthy** leaves—contributing to better disease management in apple orchards.

---

## 📸 Demo

![Prediction Example](https://your-image-link-here.com) <!-- Replace with your own hosted image or GIF -->

---

## 📂 Dataset

We used a labeled dataset containing images of apple leaves with annotations for the following classes:

- ✅ Healthy
- 🍂 Scab
- 🔴 Rust

Annotations were in YOLO format, containing bounding boxes and class IDs.

---

## 🛠️ Technologies Used

- Python 🐍
- [YOLOv5](https://github.com/ultralytics/yolov5) (Ultralytics)
- PyTorch
- OpenCV
- Matplotlib
- Scikit-learn (for evaluation)
- Google Colab / Jupyter Notebook

---

## 🚀 Features

- 🔍 Real-time object detection of apple leaf diseases.
- 📦 Supports multiple instances in a single image.
- 📊 Evaluation metrics: Confusion matrix, ROC and AUC curves.
- 📈 Training and validation curve visualization.
- 💾 Custom dataset support (YOLO format).

---

## 🧪 Model Evaluation

We evaluate the model using:
- Confusion Matrix
- ROC Curve (per class)
- AUC Score
- Precision, Recall, F1 Score

> These are visualized in our `evaluate_model.ipynb` notebook.

---

## 📥 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/apple-leaf-disease-detector.git
cd apple-leaf-disease-detector

# Install dependencies
pip install -r requirements.txt
