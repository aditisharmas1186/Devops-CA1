# 🚀 DevOps CA2 — TalentLink Project
Group Members:

22070122213: Sneha Padgaonkar

22070122230: Swapnaja Paikrao

23070122501: Akash Pandit

23070122503: Atharva Pachunde


Project Access Link: https://talentlinkweb.vercel.app/

## 📌 Project Overview
This repository demonstrates the **complete DevOps pipeline** for the *TalentLink* Node.js web application — covering CI/CD, IaC, Containerization, Orchestration, and Monitoring.

All steps are implemented according to the **DevOps CA2 Rubrics**, using:
- **GitHub Actions** for deployment automation  
- **Ansible** for configuration management  
- **Docker + Kubernetes** for containerization & orchestration  
- **Prometheus & Grafana (simulated)** for monitoring  
- **Markdown + screenshots** as proof of execution  

## 🧱 Step 1 — Deployment Strategy (CI/CD)

**Tool Used:** GitHub Actions  
**Goal:** Automate build & deployment using a pipeline triggered on push to `main`.

- The workflow builds a Docker image using the project’s `Dockerfile`
- Pushes image to **GitHub Container Registry (GHCR)**
- Executes automatically on every code push
📁 File: `.github/workflows/ci-cd.yaml`

<img width="940" height="421" alt="image" src="https://github.com/user-attachments/assets/1addec22-9d12-432d-9343-cfeeb2abff75" />
<img width="940" height="425" alt="image" src="https://github.com/user-attachments/assets/aebcb4ab-cd66-4ec3-ae25-4037341dd742" />

## ⚙️ Step 2 — Configuration Management & IaC (Ansible)

**Tool Used:** Ansible  
**Goal:** Automate system setup and configuration of the runtime environment.

- Created `inventory.ini` for local connection  
- Used `site.yml` to:
  - Install Node.js, npm, curl  
  - Create a system user `talentlink`  
  - Prepare `/opt/talentlink` directory  
  - Copy `.env` file  
  - Install **PM2** globally

📁 Files:
- `ansible/inventory.ini`  
- `ansible/site.yml`
<img width="1386" height="234" alt="image" src="https://github.com/user-attachments/assets/58c3ebc5-0534-4b17-af05-0ff2ef69200c" />
<img width="992" height="512" alt="image" src="https://github.com/user-attachments/assets/cc47fd90-120c-420c-b3bb-b3012e6b72b0" />

## 🐳 Step 3 — Containerization & Orchestration

**Tools Used:** Docker + Kubernetes (simulated)  
**Goal:** Containerize the TalentLink app and prepare K8s manifests.

### Docker:
- Created `Dockerfile` for Node.js app
- Built image: `talentlink:local`
- Pushed to GHCR for deployment

### Kubernetes (simulated):
- `k8s/namespace.yaml` — defines isolated namespace  
- `k8s/deployment.yaml` — manages replicas, probes  
- `k8s/service.yaml` — exposes app on ClusterIP  

📁 Folder: `k8s/`
<img width="237" height="112" alt="image" src="https://github.com/user-attachments/assets/811b66d6-b586-458e-a86a-973134024fc4" />
<img width="940" height="352" alt="image" src="https://github.com/user-attachments/assets/4b645f7c-56df-4c7d-821f-d7cd2b8d3a4c" />

## 📊 Step 4 — Monitoring & Logging

**Tools Used:** Prometheus (metrics) + Grafana (dashboard)

### Features:
- Metrics exposed at `/api/metrics` using Prometheus format  
- Dashboard JSON defines:
  - Request rate (`rate(http_requests_total[1m])`)  
  - App uptime (`up` metric)  

📁 Files:
- `monitoring/prometheus-scrape-note.md`
- `monitoring/grafana-dashboard.json`
- Public path: `/public/monitoring/grafana-dashboard.json`

<img width="940" height="561" alt="image" src="https://github.com/user-attachments/assets/c13d4dc2-0d47-4e66-a84b-b94b1326a1ba" />
<img width="804" height="632" alt="image" src="https://github.com/user-attachments/assets/2d3eac15-f819-49fc-bbf4-cbdf71139a1b" />
<img width="825" height="538" alt="image" src="https://github.com/user-attachments/assets/8c47f248-4de1-4c9a-be0f-69b5ef7f8244" />

## 🧭 Step 5 — Reflection & Report

| Aspect | Summary |
|--------|----------|
| **Architecture** | GitHub → CI/CD → GHCR → (Simulated) K8s → Monitoring |
| **Pipeline Flow** | Commit triggers GitHub Actions → Build Docker → Push to GHCR → Deployment YAML ready |
| **Challenges Faced** | Build errors (missing `package-lock.json`), GitHub image naming (uppercase issue), YAML structure validation |
| **Lessons Learned** | Understood DevOps flow end-to-end — automation, orchestration, monitoring setup |
| **Future Scope** | Integrate real Prometheus + Grafana dashboard, deploy on AWS EKS or Minikube cluster |





- 


