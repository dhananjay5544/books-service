pipeline {
  agent any
  stages {
    stage('install dependencies') {
      agent any
      steps {
        nodejs('nodejs') {
          sh 'yarn'
        }

      }
    }

    stage('build') {
      steps {
        nodejs('nodejs') {
          sh 'yarn build'
        }

      }
    }

    stage('test') {
      steps {
        nodejs('nodejs') {
          sh 'yarn test'
        }

      }
    }

  }
}