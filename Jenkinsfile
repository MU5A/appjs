pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {

                echo 'Testing..'  
                sh 'npm install && npm test' 
                junit allowEmptyResults: true, keepLongStdio: true, skipMarkingBuildUnstable: true, testResults: '**/*.xml'
            }
        }
    }
}
