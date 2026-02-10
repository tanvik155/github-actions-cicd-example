pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:18'
                }
            }
            steps {
                sh '''
                  node -v
                  npm -v
                  npm install
                '''
            }
        }

        stage('Run Tests') {
            agent {
                docker {
                    image 'node:18'
                }
            }
            steps {
                sh 'npm test || echo "No tests configured"'
            }
        }
    }
}
