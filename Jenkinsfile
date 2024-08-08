pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the repository
                    git 'https://github.com/neoPerera/my-portfolio.git'
                    
                    // Print the workspace directory
                    echo "Workspace directory: ${env.WORKSPACE}"
                }
            }
        }
        stage('Build') {
            steps {
                // Add your build steps here
                sh 'echo "Building..."'
            }
        }
        stage('Test') {
            steps {
                // Add your test steps here
                sh 'echo "Testing..."'
            }
        }
        stage('Deploy') {
            steps {
                // Add your deploy steps here
                sh 'echo "Deploying..."'
            }
        }
    }
}
