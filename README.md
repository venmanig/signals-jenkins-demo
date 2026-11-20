# signals-jenkins-demo

A tiny app for testing Signals' Jenkins integration (AD-142). `npm test` runs `test/run.js`, which writes
`reports/junit.xml`. `Jenkinsfile` is the pull request CI; the deploy jobs live in the local Jenkins.
