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
                // Pausa para garantir que o servidor subiu (aprox. 5 segundos)
                bat 'ping 127.0.0.1 -n 6 > nul'
            }
        }

        stage('Executar Testes API') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}
