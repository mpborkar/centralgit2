public with sharing class HotelPaymentRecordFormClass {

    @AuraEnabled
    public static Payment_Master__c HotelPaymentRecordFormMethod(Payment_Master__c newPaymentRecord) {

        insert newPaymentRecord;
        return newPaymentRecord;
    }
}
