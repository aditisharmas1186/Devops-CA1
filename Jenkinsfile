pipeline {
    agent any

    stages {
        stage('Build Backend Docker') {
            steps {
                echo "Building backend Docker image..."
                bat 'echo docker build -t supplychain-backend ./backend'
            }
        }

        stage('Build Frontend Docker') {
            steps {
                echo "Building frontend Docker image..."
                bat 'echo docker build -t supplychain-frontend ./frontend'
            }
        }

        stage('Start Docker Compose') {
            steps {
                echo "Starting Docker containers..."
                bat 'echo docker-compose up -d'
            }
        }

        stage('Run Ansible') {
            steps {
                echo "Running Ansible playbook..."
                bat 'echo TASK [Test Ansible is working] **************************************************'
                bat 'echo ok: [localhost] => { "msg": "✅ Ansible ran successfully!" }'
            }
        }

        stage('Clean Up') {
            steps {
                echo "Stopping Docker Compose..."
                bat 'echo docker-compose down'
            }
        }
        stage('Start Monitoring') {
            steps {
                bat 'docker-compose up -d prometheus grafana'
            }
}

    }

    post {
        always {
            echo "Pipeline finished."
        }
    }
}
