public class transactionItemCreateTriggerHandler{

    public void checkTransactionItemListPostEligibility(){
    
    List<TransactionItem__c> transactionItems=new List<TransactionItem__c>();
    List<Transaction__c> transactions=new List<Transaction__c>();
    Set<Id> transactionItemIds=new Set<Id>();
    Id transactionId;
    
    for(TransactionItem__c transitem: [select id, Name, Item_Cost__c, Transaction__r.id, Transaction__r.Total_Cost__c, Transaction__r.Total_Discount__c, Transaction__r.Transaction_Count__c from TransactionItem__c where id in:Trigger.new]){
        
        transactionItems.add(transitem);
        transactions.add(transitem.Transaction__r);
        
    }
    
    for(Transaction__c trans: transactions){
        Integer countOfChildRecords=trans.Transactions__r.size();
        
        if(countOfChildRecords == trans.Transaction_Count__c.intValue()){
            
            for(TransactionItem__c tansItem: trans.TransactionItems__c){
          
                transactionItemIds.add(tansItem);
     
                
            }
            //make the call
            if(trans.id=null && transactionItemIds.size()>0)
            {
            postTransactionItems(trans.id, transactionItemIds);
            }
        }
    }
}
    
    
    @future(callout=true)
    public static void postTransactionItems(Id transactionId, List<id> transactionItemIds){
    
    system.debug('Transaction ITEM IDs' +transactionItemIds);
    GenerateJSONStringClass trans=new GenerateJSONStringClass();
    String finalJSStringTransactionItem=trans.getTransactionItemsJSON(transactionItemIds);
    
    
      //Set HTTPRequest Method
      HttpRequest firstReq = new HttpRequest();
      firstReq .setMethod('POST');
      firstReq .setHeader('Accept-Encoding', 'gzip,deflate');
      firstReq .setHeader('content-type', 'text/xml; charset=utf-8');
      firstReq .setHeader('Content-Length', String.valueOf(finalJSStringTransactionItem.length()));
      firstReq .setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
    
      // setting body
      System.debug('Input Request:' + finalJSStringTransactionItem);
      firstReq .setBody(finalJSStringTransactionItem);
    
      //Execute web service call here     
      Http http1 = new Http();
      HTTPResponse firstRes = http1.send(firstReq);
    
      //Helpful debug messages
      System.debug(firstRes.toString());
      System.debug('STATUS:' + firstRes.getStatus());
      System.debug('STATUS_CODE:' + firstRes.getStatusCode());
      String responseXML = firstRes.getBody();
      System.debug('responseXML:' + responseXML);
      system.debug(+transactionId);
    
     if (firstRes.getStatusCode() == 201) {
                
                String finalJSStringTransaction=trans.getTransactionJSON(transactionId);
                system.debug('Final Result is:' +finalJSStringTransaction);
                
                //Set HTTPRequest Method
      HttpRequest secondReq= new HttpRequest();
      secondReq.setMethod('POST');
      secondReq.setHeader('Accept-Encoding', 'gzip,deflate');
      secondReq.setHeader('content-type', 'text/xml; charset=utf-8');
      secondReq.setHeader('Content-Length', String.valueOf(finalJSStringTransaction.length()));
      secondReq.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
    
      // setting body
      System.debug('Input Request:' + finalJSStringTransaction);
      secondReq.setBody(finalJSStringTransaction);
    
      //Execute web service call here     
      Http http2 = new Http();
      HTTPResponse secondRes = http2.send(secondReq);
    
      //Helpful debug messages
      System.debug(secondRes.toString());
      System.debug('STATUS:' + secondRes.getStatus());
      System.debug('STATUS_CODE:' + secondRes.getStatusCode());
      String secondResponseXML = secondRes.getBody();
      System.debug('responseXML:' + secondResponseXML);
      system.debug(+transactionId);
                
            } else {
                System.debug(firstRes.getBody());
            }
          
        }
        
    }