public with sharing class getAccountsBySearch {

    @AuraEnabled
    public static List<Account> getAccountRecords(string searchKeywd){

        system.debug('inside method siva');
        return [select id, Name, Website, AccountNumber from Account WHERE Name LIKE :searchKeywd+'%'];

        
        
    }
}
