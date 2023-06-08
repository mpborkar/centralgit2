public class AccountRecordDisplayClass {

    @AuraEnabled
    public static list<Account> getrecords(){
     //   return new list <Account> ([SELECT id, Name, Phone, Type FROM Account WHERE Type!= null LIMIT 100]);
        
        List <Account> acclst = [SELECT id, Name, Phone FROM Account LIMIT 100];
        return acclst;
    }
    
}