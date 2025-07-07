# 🍎 Apple Leaf Disease Detection using YOLOv5

A deep learning-based system to detect and classify apple leaf diseases using the YOLOv5 object detection model. This project aims to help in early identification of leaf diseases such as **scab**, **rust**, and differentiate them from **healthy** leaves—contributing to better disease management in apple orchards.

---

## 📸 Demo: Detection Result

![image](https://github.com/user-attachments/assets/1aa8b33b-4d02-4450-b502-9dfb753857e1)

---

## 📊 Model Evaluation

We used several performance metrics to evaluate the trained YOLOv5 model:

### 📌 Confusion Matrix

The confusion matrix provides a summary of prediction results for each class (Healthy, Rust, Scab).

![image](https://github.com/user-attachments/assets/139145d1-b651-4baa-ae6d-15872e0c672f)

---

### 📈 ROC Curves

Receiver Operating Characteristic (ROC) curves were generated to visualize the model's ability to separate classes. The Area Under the Curve (AUC) is also shown for each disease class.

![image](https://github.com/user-attachments/assets/994469fe-b438-426d-b39d-0db25675d656)


---

## 🧪 Classes Detected

- ✅ Healthy
- 🍂 Scab
- 🔴 Rust

---

## 🛠️ Technologies Used

- Python 🐍
- [YOLOv5](https://github.com/ultralytics/yolov5)
- PyTorch
- OpenCV
- Matplotlib
- Scikit-learn

---

## 🚀 Features

- 🔍 Real-time detection of multiple leaf diseases
- 📦 Multiple object support per image
- 📊 Evaluation metrics and visualizations
- 📈 Training & validation tracking

---

## 📥 Installation

```bash
git clone https://github.com/your-username/apple-leaf-disease-detector.git
cd apple-leaf-disease-detector
pip install -r requirements.txt
