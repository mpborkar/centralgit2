public class LearningHotelEntryClass {

    @AuraEnabled
    public static string createrecord (Guest_Master__c client){        
        
          insert client; 
        string varNewRecordID = client.ID;
        system.debug('Record ID is: ' + varNewRecordID);
		       
        return varNewRecordID;
	
        
        
    }
}