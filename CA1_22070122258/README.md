# DevOps CA-1 - 22070122258
# 🧠 Binary Classification with a Bank Dataset
### Kaggle Playground Series – Season 5, Episode 8

## 🎯 Overview
This project predicts a binary outcome (Yes/No) using structured banking data.  
It demonstrates a complete DevOps pipeline including:
- Model training and versioning
- CI/CD automation with GitHub Actions
- Environment configuration using Ansible
- Containerization with Docker
- Orchestration with Kubernetes
- Monitoring with Prometheus + Grafana

---

## ⚙️ Tech Stack
**Languages:** Python, YAML  
**ML Frameworks:** scikit-learn, pandas, numpy  
**DevOps Tools:** Docker, Kubernetes, Ansible, GitHub Actions, Prometheus, Grafana  

---

## 🧩 Repository Structure
See folder breakdown in project root for detailed organization (`data/`, `src/`, `ansible/`, `docker/`, etc.)

---

## 🚀 Setup Instructions
### 1️⃣ Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
2️⃣ Train Model

Run notebooks/bank_model.ipynb to generate and save src/model.pkl.

3️⃣ Run Flask API Locally
cd src
python app.py


Then visit http://localhost:5000/predict

4️⃣ Build Docker Image
docker build -t bank-ml-app -f docker/Dockerfile .
docker run -p 8080:5000 bank-ml-app

5️⃣ Deploy to Kubernetes
kubectl apply -f docker/deployment.yaml
kubectl apply -f docker/service.yaml

📊 Monitoring

Prometheus scrapes metrics from the Flask API

Grafana displays response time, uptime, and error rates

🧠 Results
Metric	Score
Training Accuracy	97.8%
Validation Accuracy	96.9%
Kaggle Public Leaderboard	0.96922
👥 Team Members

Yogesh Meena - 22070122258

🔗 Kaggle Challenge

Playground Series S5E8 – Binary Classification with Bank Dataset


---

## 🧱 Next Steps

1. Create the local folder structure as above  
2. Add your code + files  
3. Run the following commands:

```bash
git init
git add .
git commit -m "Initial commit - DevOps CA1 Bank Classification"
git branch -M main
git remote add origin https://github.com/<your-username>/devops-ca1-binary-bank-classification.git
git push -u origin main
