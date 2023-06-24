pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/analuisaabarbosa/ebacshop_teste.git'
            }
        }
        stage('Instalar dependências') {
            steps {
               sh 'npm install'
            }
        }
        stage('Instalar Cypress') {
            steps{
                sh 'npm install cypress'
            }
        }
        stage('Executar testes') {
            steps{
               sh 'NO_COLOR=1 npm run cy:run' 
            }
        }
    }
}
