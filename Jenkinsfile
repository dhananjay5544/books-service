pipeline {
  agent any
  environment{
    registry = 'dhananjayofficial/book-service'
    registryCredential = 'dockercred'
    dockerImage = ''
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
          dockerImage = docker.build registry
        }
      }
    }
    stage('publish image') {
      steps {
        script { 
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
            dockerImage.push('latest')
          }
        }
      }
    }
  }
}
