// CI for pull requests and branches (the multibranch job ci/signals-jenkins-demo)
pipeline {
  agent any
  stages {
    stage('Test') {
      steps { sh 'node test/run.js' }
    }
  }
  post {
    always { junit allowEmptyResults: true, testResults: 'reports/*.xml' }
  }
}
