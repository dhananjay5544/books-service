pipeline {
  agent any
  environment{
    registry = 'dhananjayofficial/book-service'
  }
  stages {
    stage('build and test') {
      steps {
        nodejs('nodejs') {
          sh 'yarn'
        }
        nodejs('nodejs') {
          sh 'yarn build'
        }
        nodejs('nodejs') {
          sh 'yarn test'
        }
      }
    }
    stage('build image') {
      steps {
        script { 
          docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
  }
}
