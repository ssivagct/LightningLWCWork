public with sharing class PostOfficeJSONParser {


    public List<String> postOfficeJSONParser(String inputJSON){


//'[{"Message":"Number of pincode(s) found:8","Status":"Success","PostOffice":[{"Name":"Elayampalayam","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Delivery","Circle":"Tamilnadu","District":"Namakkal","Division":"Namakkal","Region":"Coimbatore","Block":"Tiruchengodu","State":"Tamil Nadu","Country":"India","Pincode":"637205"},{"Name":"Kumaramangalam","Description":null,"BranchType":"Sub Post Office","DeliveryStatus":"Delivery","Circle":"Tamilnadu","District":"Namakkal","Division":"Namakkal","Region":"Coimbatore","Block":"Tiruchengode","State":"Tamil Nadu","Country":"India","Pincode":"637205"},{"Name":"Kuppandapalayam","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Delivery","Circle":"Tamilnadu","District":"Namakkal","Division":"Namakkal","Region":"Coimbatore","Block":"Tiruchengodu","State":"Tamil Nadu","Country":"India","Pincode":"637205"},{"Name":"Pillanatham","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Delivery","Circle":"Tamilnadu","District":"Namakkal","Division":"Namakkal","Region":"Coimbatore","Block":"Tiruchengodu","State":"Tamil Nadu","Country":"India","Pincode":"637205"},{"Name":"Sathinaickenpalayam","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Delivery","Circle":"Tamilnadu","District":"Namakkal","Division":"Namakkal","Region":"Coimbatore","Block":"Tiruchengodu","State":"Tamil Nadu","Country":"India","Pincode":"637205"},{"Name":"Unjanai","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Delivery","Circle":"Tamilnadu","District":"Namakkal","Division":"Namakkal","Region":"Coimbatore","Block":"Tiruchengodu","State":"Tamil Nadu","Country":"India","Pincode":"637205"},{"Name":"Unjanaigoundampalayam","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Delivery","Circle":"Tamilnadu","District":"Namakkal","Division":"Namakkal","Region":"Coimbatore","Block":"Tiruchengode","State":"Tamil Nadu","Country":"India","Pincode":"637205"},{"Name":"Vattur","Description":null,"BranchType":"Branch Post Office","DeliveryStatus":"Delivery","Circle":"Tamilnadu","District":"Namakkal","Division":"Namakkal","Region":"Coimbatore","Block":"Tiruchengodu","State":"Tamil Nadu","Country":"India","Pincode":"637205"}]}]';
    
JSONParser jp=JSON.createParser(inputJSON);
List<String> result=new List<String>();
//system.debug('1st' +jp.getCurrentToken());

while(jp.nextToken()!=null){
    If(jp.getCurrentToken()==System.JSONToken.FIELD_NAME && jp.getText()=='Name')
    {
   // system.debug('API:' +jp.getCurrentToken());
        jp.nextToken();
    //system.debug('Test vslue:' +jp.getText());
    result.add(jp.getText());
    }
}

system.debug('Result is:' +result);

return result;
    }
}
