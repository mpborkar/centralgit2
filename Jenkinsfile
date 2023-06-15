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
  
}
