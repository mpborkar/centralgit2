public with sharing class HotelHotelListClass {
    
    @AuraEnabled (cacheable=true)

    public static List<Hotel_Masters__c> HotelHotelListMethod(string vhotelcity,string vhoteltype) {
        
        system.debug('For Test : ' + vhotelcity + ' ' + vhoteltype);
        
        list <Hotel_Masters__c> hhotellist = [SELECT ID,Hotel_Name__c, Hotel_City__c, Hotel_Type__c 
                FROM Hotel_Masters__c 
                WHERE Hotel_City__c= :vhotelcity AND Hotel_Type__c= :vhoteltype];
         
        
                system.debug('Hotel list' + hhotellist );
                return hhotellist;

    }
}
