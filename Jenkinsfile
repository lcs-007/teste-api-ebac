pipeline {
    agent any
    
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
                bat 'npx cypress run' // ou 'npm run cy:run' se você tiver esse script
            }
        }
    }
}
