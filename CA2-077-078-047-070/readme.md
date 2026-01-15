# DevOps CA3 Report: Microplastic Detection ML Application

## Project Overview
This report documents the implementation of a complete DevOps pipeline for a YOLOv8-based machine learning application that detects and classifies microplastics in images. The project demonstrates a modern, scalable approach to ML application deployment using industry-standard DevOps tools and practices.

## Team Members
- **Heet Dudhwala** (PRN: 22070122078)
- **Harsimran Kaur** (PRN: 22070122077)  
- **Omkar Derekar** (PRN: 22070122047)
- **Gehna Vithalani** (PRN: 22070122070)

**Submitted to:** Dr. Aditi Sharma  
**Subject:** DevOps

## Project Architecture

### Step 1: Deployment Strategy (GitHub Actions)
- **CI/CD Pipeline:** Automated workflow triggered on every push/PR to main branch
- **Key Features:**
  - Automated testing of critical Python packages (PyTorch, Streamlit, OpenCV, YOLOv8)
  - Containerization with Docker
  - Container testing and validation
  - Docker Hub registry integration
- **Deliverable:** `.github/workflows/ci-cd.yml`

### Step 2: Configuration Management & IaC (Ansible)
- **Infrastructure as Code:** Automated server provisioning and configuration
- **Role-based Structure:** Organized Ansible roles for maintainability
- **Key Tasks:**
  - System preparation and dependency installation
  - Service management (Docker, systemd)
  - User and security configuration
  - Application deployment and orchestration
- **Deliverables:**
  - `ansible/playbook.yml` - Main playbook
  - `ansible/inventory.ini` - Target server configuration
  - `ansible/roles/microplastic-app/` - Modular role structure

### Step 3: Containerization & Orchestration
#### Docker Containerization
- **Base Image:** Python 3.10-slim
- **Key Features:**
  - System dependencies for OpenCV and media processing
  - Specific package versions for compatibility
  - PyTorch CPU version for ML inference
  - Streamlit configuration on port 8501

#### Kubernetes Orchestration
- **Namespace:** `microplastic-app` for resource isolation
- **Deployment:** 3 replicas with rolling update strategy
- **Service:** LoadBalancer type for external access
- **Features:**
  - Health monitoring (liveness/readiness probes)
  - Resource management (CPU/memory limits)
  - Rolling updates without downtime
- **Deliverables:**
  - `microplastic-classifier/Dockerfile`
  - Kubernetes manifests in `k8s/` directory

### Step 4: Monitoring & Logging
#### Prometheus Monitoring
- **Metrics Collection:** From multiple sources including application and Kubernetes pods
- **Configuration:**
  - Different scrape intervals for different targets
  - Kubernetes service discovery for automatic pod detection
  - Internal DNS-based service access
- **Deliverable:** `monitoring/prometheus.yml`

#### Grafana Dashboard
- Visualization and monitoring of application metrics
- Real-time performance monitoring

## Tools & Technologies Used
- **CI/CD:** GitHub Actions
- **Configuration Management:** Ansible
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **Monitoring:** Prometheus + Grafana
- **ML Framework:** YOLOv8, PyTorch
- **Web Framework:** Streamlit

## Key Features
- ✅ End-to-end automation from code commit to production
- ✅ Infrastructure as Code for reproducible environments
- ✅ Containerized application with proper dependency management
- ✅ Scalable Kubernetes deployment with health monitoring
- ✅ Comprehensive monitoring and observability
- ✅ Industry-standard DevOps practices

## Conclusion
The implemented DevOps pipeline successfully automates the entire software delivery process for the microplastic detection application. From code commit to production deployment, the pipeline ensures consistency, reliability, and observability using modern DevOps tools and practices.

