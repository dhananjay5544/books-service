pipeline {
  agent any
  stages {
    stage('install dependencies') {
      agent any
      steps {
        nodejs('nodejs') {
          sh 'npm install'
        }

      }
    }

    stage('build') {
      steps {
        nodejs('nodejs') {
          sh 'npm run build'
        }

      }
    }

    stage('test') {
      steps {
        nodejs('nodejs') {
          sh 'npm run test'
        }

      }
    }

  }
}