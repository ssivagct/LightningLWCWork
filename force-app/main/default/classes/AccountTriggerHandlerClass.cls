public class AccountTriggerHandlerClass {
    
    public static void run() {

        if(Trigger.size>0){
        if(Trigger.isBefore && Trigger.isInsert){
            AccountTriggerHelperClass.accountCreateLogic(trigger.new);
        }
        if(Trigger.isAfter && Trigger.isInsert){
            AccountTriggerHelperClass.afterAccountCreate(trigger.new);
        }
        if(Trigger.isBefore && Trigger.isUpdate){
            AccountTriggerHelperClass.beforeAccountUpdateLogic((Map<id, Account>) trigger.newMap);
        }
        if(Trigger.isAfter && Trigger.isUpdate){
            AccountTriggerHelperClass.afterAccountUpdate((Map<id, Account>) trigger.newMap);

        }
        if(Trigger.isBefore && Trigger.isDelete){
            AccountTriggerHelperClass.beforeDeleteAccount((Map<id, Account>) trigger.oldMap);
        }
        if(Trigger.isAfter && Trigger.isDelete){
            System.debug('Firing inside trig siva' +trigger.old);
            AccountTriggerHelperClass.afterDeleteAccount(trigger.old);

        }
        if(Trigger.isAfter && Trigger.isUnDelete){
            system.debug('All right');
        }

    }
    }
}
