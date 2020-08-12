public with sharing class getLoginUserName {
  

    @AuraEnabled (cacheable=true)
    public static User getLoggedUserName(){
        return [select Id,Name, username from User where Id = :UserInfo.getUserId()];
        
    }
}
