public with sharing class createAccount_Form {

    // @AuraEnabled
    // public static string getaccountName()
    // {
    //     return 'Anicha';
    // }

    @AuraEnabled
    public static String createAccount(String accinput)
    {
    //     Account acc=New Account();
    //     acc.Name=accName;
    //     acc.AccountNumber=accNumber;
    Account acc = (Account)JSON.deserializeStrict(       
        accinput,  Account.class);
        
            System.debug('Account name: ' +acc.Name);
            System.debug('Account number: ' +acc.AccountNumber);
        
         try{
         Insert acc;
         system.debug('Account created successfully');
        } catch(Exception err){
            System.debug('Error Occured' +err);
        }
        return String.valueOf(acc.id);
    }
    // System.debug('Before Change' +accinput);

    // String csstring = JSON.serialize(accinput);
    // System.debug('Ater Change' +csstring);
    
}