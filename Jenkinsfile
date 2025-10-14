pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "supplychain-backend:latest"
        FRONTEND_IMAGE = "supplychain-frontend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                echo "🔄 Cloning repository..."
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    echo "🐳 Building backend image..."
                    sh 'docker build -t ${BACKEND_IMAGE} ./backend'

                    echo "🐳 Building frontend image..."
                    sh 'docker build -t ${FRONTEND_IMAGE} ./frontend'
                }
            }
        }

        stage('Run Containers with docker-compose') {
            steps {
                script {
                    echo "🚀 Starting containers using docker-compose..."
                    // use freshly built local images
                    sh 'docker-compose up -d --build'
                }
            }
        }

        stage('Verify Running Containers') {
            steps {
                script {
                    echo "🔍 Checking container status..."
                    sh 'docker ps'
                }
            }
        }

        stage('Cleanup Unused Resources') {
            steps {
                echo "🧹 Cleaning up unused Docker data..."
                sh 'docker system prune -f'
            }
        }
    }

    post {
        success {
            echo "✅ Containers built and running successfully!"
        }
        failure {
            echo "❌ Pipeline failed."
        }
    }
}
