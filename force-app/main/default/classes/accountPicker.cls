public with sharing class accountPicker {
   
@AuraEnabled (cacheable=true)
public static List<Account> getAccounts(){
    
    return [select id, name from Account];
}

@AuraEnabled (cacheable=true)
public static List<Contact> getRelatedContacts(string accId){

    return [select id, Name from Contact WHERE AccountId=:accId];
    
}

@AuraEnabled (cacheable=true)
public static List<City__c> getRelatedCities(string conId){

    return [select id, Name from City__c WHERE Contact__c=:conId];
    
}

@AuraEnabled
public static Account getAccountDetail(string accId){

    return [select id, Name, Website, AccountNumber from Account WHERE Id=:accId];
}

@AuraEnabled
public static Contact getContactDetail(string conId){

    return [select id, Name from Contact WHERE Id=:conId];
}

@AuraEnabled
public static City__c getCityDetail(string cityId){

    return [select id, Name from City__c WHERE Id=:cityId];
}


}
