public with sharing class customerForm_Handler {


    @AuraEnabled
    public static string createAccount(string accDetails) {

        Account accRecord = (Account)JSON.deserializeStrict(accDetails,  Account.class);
        System.debug('Account Record:' +accRecord);

     try{
        if(accRecord != null)
        insert accRecord;
     }catch(Exception error){

     }
     return string.valueOf(accRecord.id);

    }

    @AuraEnabled
    public static string createContact(string conDetails){

        Contact conRecord = (Contact)JSON.deserializeStrict(conDetails,  Contact.class);
        System.debug('Contact Record:' +conRecord);
        try{
            if(conRecord != null)
            insert conRecord;
         }catch(Exception error){
             System.debug('Case Error:' +error.getMessage());
    
         }
        
         return string.valueOf(conRecord.id);
    }

    @AuraEnabled
    public static string createCase(string caseDetails){

        System.debug('Case Details:' +caseDetails);
        Case caseRecord = (Case)JSON.deserializeStrict(caseDetails,  Case.class);
        System.debug('Case Record:' +caseRecord);

        try{
            if(caseRecord != null)
            insert caseRecord;
         }catch(Exception error){
    
         }
         return string.valueOf(caseRecord.id);
    }
}
