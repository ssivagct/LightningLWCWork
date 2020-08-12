public with sharing class retrieveTasks {
 
    @AuraEnabled (cacheable=true)
    public static List<Task> getTasks(){
        return [select id, subject from task where OwnerId=:UserInfo.getUserId()];
        
    }
}
