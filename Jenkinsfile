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
        
        stage('Executar Testes API') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}
