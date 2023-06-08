public with sharing class HotelGuestRecordFormClass {
    
    @AuraEnabled

    public static string  HotelGuestRecordFormMethod(Guest_Master__c newGuestRecord) {

        try { 
            insert newGuestRecord; 
            system.debug('Record ID is -' + newGuestRecord.ID);
            return newGuestRecord.ID;
        
        } 

        catch (Exception e) {
            throw new AuraHandledException(e.getMessage()); 
        }

    }
}
