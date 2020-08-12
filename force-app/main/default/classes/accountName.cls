public with sharing class accountName {

    @AuraEnabled
    public static string getaccountName()
    {
        return 'Anicha';
    }

    @AuraEnabled
    public static void createAccount(String accinput)
    {
        String csstring = JSON.serialize(accinput);
        System.debug('Acc Value Strin' +csstring);
        // Account acc=New Account();
        // acc.Name=accinput;
        // Insert acc;
        // return acc.id;
    }
    

    @AuraEnabled
    public static void createnewAccount(account accobj)
    {
        insert accobj;
    }
}