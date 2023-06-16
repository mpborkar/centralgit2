#!groovy
import groovy.json.JsonSlurperClassic
node {
  
  def BUILD_NUMBER=env.BUILD_NUMBER
  def RUN_ARTIFACT_DIR="tests/${BUILD_NUMBER}"
  
  def HUB_ORG=env.HUB_ORG_DH
  def SFDC_HOST=env.SFDC_HOST_DH
  def JWT_KEY_CRED_ID = env.JWT_CRED_ID_DH
  def CONNECTED_APP_CONSUMER_KEY=env.CONNECTED_APP_CONSUMER_KEY_DH
  
  printIn 'KEY IS'
  printIn JWT_KEY_CRED_ID
  printIn HUB_ORG
  printIn SFDC_HOST
  printIn CONNECTED_APP_CONSUMER_KEY
  printIn BUILD_NUMBER
  printIn RUN_ARTIFACT_DIR
  
  def toolbelt = tool 'toolbelt'
  printIn toolbelt
  
withCredentials([file(credentialsId: JWT_KEY_CRED_ID, variable: 'jwt_key_file')]) {
stage ('Deploye Code') {
if (isUnix()) {
rc = sh returnStatus: true, script: "${toolbelt} force:auth:jwt:grant --clientid ${CONNECTED_APP_CONSUMER_KEY} --username ${HUB_ORG} --jwtkeyfile ${jwt_key_file} -
}else{

rc = bat returnStatus: true, script: "\"${toolbelt}\" force:auth:jwt:grant --clientid ${CONNECTED_APP_CONSUMER_KEY} --username ${HUB_ORG} --jwtkeyfile \"${jwt_key}

}

if (rc != 0) { error 'hub org authorization failed" }

printIn rc

// need to pull out assigned username

if (isUnix()) {
rmsg=sh returnStdout: true, script: "${toolbel} force:mdapi:deploy -d manifest/. -u ${HUB_ORG}"
}else{
rmsg = bat returnStdout: true, script: "\"${toolbelt}\" force:mdapi: deploy -d manifest/. -u ${HUB_ORG}"
}

printf rmsg
println('Hello from a Job DSL script!')
println(rmsg)
}
