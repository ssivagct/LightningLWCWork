public class AccountTriggerHelperClass {
    
    public static void accountCreateLogic(List<Account> accList){

        List<Account> insertAccList=new List<Account>();

        for(Account acc:accList){
            if(acc.Type=='Other'){
                beforeAccountCreateValidation(acc);
            }
            acc.Industry='Government';
            acc.Website='https://google.com';
            acc.AccountNumber='12345';
            insertAccList.add(acc);
            
        }

    }

    public static void beforeAccountCreateValidation(Account acc){
        acc.addError('Type shouldn\'t be \'Other\' value. Please select correct value:');        
    }

    public static void afterAccountCreate(List<Account> accList){

        List<Opportunity> relatedOpps=new List<Opportunity>();

        for(Account acc: accList){
            Opportunity opp1=new Opportunity(Name=acc.Name+ ' ' +'Test_Opp1', StageName='Prospecting',CloseDate=date.ValueOf('2020-12-31'), AccountId=acc.id );
            Opportunity opp2=new Opportunity(Name=acc.Name+ ' ' +'Test_Opp2', StageName='Prospecting',CloseDate=date.ValueOf('2021-01-31'), AccountId=acc.id);
            relatedOpps.add(opp1);
            relatedOpps.add(opp2);
        }
        insert relatedOpps;
        
    }



    public static void beforeAccountUpdateLogic(Map<id, Account> accMap){
       Set<id> accIds=new Set<Id>();

        for(Opportunity Op: [SELECT accountId from Opportunity where AccountId IN :accMap.keySet() AND StageName='Closed Won']){
            accIds.add(Op.AccountId);
        }
        System.debug('acc ID check siva:' +accIds); 

        for(Account acc:accMap.values()){
            if(acc.type=='Prospect' && accIds.contains(acc.Id)){
                acc.addError('Error Occured Siva');
            }
            acc.ShippingStreet='Kent st';
            acc.ShippingCity='Sydney';
            acc.ShippingState='New South Wales';
            acc.ShippingPostalCode='2100';
            acc.ShippingCountry='Australia';
        }
    }
    


    public static void afterAccountUpdate(Map<id, Account> accNewMap){

        List<Contact> newConList=new List<Contact>();
        List<Case> newCaseList=new List<Case>();
        Set<Id> inEligibleAccountIds=new Set<Id>();

        for(Contact co: [SELECT accountId from Contact where AccountId IN :accNewMap.keySet()]){
            inEligibleAccountIds.add(co.AccountId);
        }

        for(Case cs: [SELECT accountId from Case where AccountId IN :accNewMap.keySet()]){
            inEligibleAccountIds.add(cs.AccountId);
        }

        for(Account ac: accNewMap.values()){

            if(ac.Active__c=='Yes' &&  !inEligibleAccountIds.contains(ac.Id)){
                //createNewContacts
                Contact con=new Contact(FirstName='Test_trig', LastName=ac.Name, AccountId=ac.id);
                Case cs=new Case(Status='New', Origin='Web', Subject=ac.Name+' ' + 'Followup', AccountId=ac.id, ContactId=con.id);
                newConList.add(con);
                newCaseList.add(cs);
            }
        }
        insert newConList;
        insert newCaseList;        
    }

    public static void beforeDeleteAccount(Map<id, Account> accOldMap){

        System.debug('Inside delete MAP check siva' +accOldMap);
        for(Account acnt: accOldMap.values()){
        System.debug('Inside delete check siva' +acnt.Description);
       if(acnt.Description==null){
            acnt.addError('Please complete Description field and Reason to Delete');
        }
    }
    }

    public static void afterDeleteAccount(List<Account> accListDel){


        Messaging.SingleEmailMessage[] messages =   new List<Messaging.SingleEmailMessage>();
        List < String > toAddresses = new List < String > ();

        for(Account act: accListDel){
            
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
        system.debug('Email Address of USER:' +act.Owner.Email);
        toAddresses.add('ssivagct@gmail.com');
        message.optOutPolicy = 'FILTER';
        message.settoAddresses(toAddresses);
        message.subject = 'Subject Test Message';
        message.plainTextBody = 'This is the message body.';
        messages.add(message);
        }

Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);

if (results[0].success) {
    System.debug('The email was sent successfully.');
} else {
    System.debug('The email failed to send: ' + results[0].errors[0].message);
}
    }

    public static void afterUnDeleteAccountLogic(List<Account> accList){

        
    }


}
