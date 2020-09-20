public with sharing class PostOfficeAPIClass {

//@future (callout=true)
@AuraEnabled
public static List<String> getPostOfficeName(string postCode){

    List<String> result=new List<String>(); 
    string postCodeURL='https://api.postalpincode.in/pincode/';
    postCodeURL+=postCode;
    System.debug('Input:' +postCodeURL);
    HttpRequest req=new HttpRequest();

    req.setMethod('GET');
    req.setEndpoint(postCodeURL);
    //req.setHeader('content-type', 'application/json');
    //req.setTimeout(32000);
    //req.setBody('Check');

    Http firstCall=new Http();
    HttpResponse firstResponse=firstCall.send(req);

    System.debug('Response:' +firstResponse);

     PostOfficeJSONParser jp=new PostOfficeJSONParser();
    result=jp.postOfficeJSONParser(firstResponse.getBody());

    System.debug('Final Result:' +result); 
    return result;

    }
}
