pipeline {
    agent any

    environment {
        BACKEND_PORT = "4000"
        FRONTEND_PORT = "3001"  // avoid 3000 conflicts
    }

    stages {

        stage('Build Backend Docker') {
            steps {
                echo "Building backend Docker image..."
                bat 'docker build -t supplychain-backend ./backend'
            }
        }

        stage('Build Frontend Docker') {
            steps {
                echo "Building frontend Docker image..."
                bat 'docker build -t supplychain-frontend ./frontend'
            }
        }

        stage('Start Docker Compose') {
            steps {
                echo "Starting Docker containers..."
                bat 'docker-compose up -d'
            }
        }

        stage('Run Ansible (Dummy)') {
            steps {
                echo "Running Ansible playbook..."
                bat 'docker run --rm -v %CD%\\ansible:/ansible my-ansible'
            }
        }

        stage('Clean Up') {
            steps {
                echo "Stopping Docker Compose..."
                bat 'docker-compose down'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}
