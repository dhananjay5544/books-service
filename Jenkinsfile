pipeline {
  agent any
  stages {
    stage('build and test') {
      agent any
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

  }
}