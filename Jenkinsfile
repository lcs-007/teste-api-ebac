pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\nodejs;${env.PATH}"
    }

    stages {
        stage('Clonar repositório API') {
            steps {
                git branch: 'main', url: 'https://github.com/lcs-007/teste-api-ebac.git'
            }
        }

        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }

        stage('Iniciar servidor') {
            steps {
                // Inicia o servidor em background
                bat 'start /B npm run start'
                // Pequena pausa para garantir que o servidor subiu
                bat 'timeout /t 5'
            }
        }

        stage('Executar Testes API') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}
