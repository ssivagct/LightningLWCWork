trigger AccountTrigger on Account (before insert, before update, before delete, after insert, after update, after delete, after undelete) {

AccountTriggerFlag__c mc = AccountTriggerFlag__c.getInstance('00e2x000001COjo');
boolean flagValue = mc.Account_Trigger_Flag__c;

    if(flagValue){

        //call triggerHandler
        AccountTriggerHandlerClass.run();
    }

}