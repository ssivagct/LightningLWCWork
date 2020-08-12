public with sharing class returnAccounts {
 
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccounts(){

        return [select id, name, website, phone from Account];
        
    }
}
