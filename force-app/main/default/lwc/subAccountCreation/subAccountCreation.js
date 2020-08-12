import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
import getAccountDetail from '@salesforce/apex/accountPicker.getAccountDetail';
import getContactDetail from '@salesforce/apex/accountPicker.getContactDetail';
import getCityDetail from '@salesforce/apex/accountPicker.getCityDetail';

export default class SubAccountCreation extends LightningElement {

    @track accId;
    @track accDetail;
    @track accName;
    @track accWebsite;

    @track conDetail;
    @track conName;
    @track conId;

    @track cityId
    @track cityDetail;
    @track cityName

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        console.log('insude connect call back before call');
             registerListener('pushaccountid', this.getAccountRecord, this)
                console.log('insude connect call back after call');
            }
        
            disconnectedCallback() {
                unregisterAllListeners(this);
            }
        
            getAccountRecord(payload) {
                console.log('insude push handler');
                this.accId = payload[0];
                this.conId = payload[1];
                this.cityId = payload[2];
                console.log('Acc ID' +this.accId +this.conId)
                getAccountDetail({'accId': this.accId}).then(result => {
        
                    this.accDetail=result;

                    console.log('return drom Account clas:' +this.accDetail.Name)
                    this.accName=this.accDetail.Name
                    this.accWebsite=this.accDetail.Website
            
                }).catch(error => {
                    
                    console.log('Error' +error);
                });
                
                getContactDetail({'conId': this.conId}).then(result => {
        
                    this.conDetail=result;

                    console.log('return drom Account clas:' +this.conDetail.Name)
                    this.conName=this.conDetail.Name
                    
            
                }).catch(error => {
                    
                    console.log('Error' +error);
                });


                getCityDetail({'cityId': this.cityId}).then(result => {
        
                    this.cityDetail=result;

                    console.log('return drom Account clas:' +this.cityDetail.Name)
                    this.cityName=this.cityDetail.Name
                    
            
                }).catch(error => {
                    
                    console.log('Error' +error);
                });

            }

             //get accName(){
            //   //  return this.accDetail.Name;
            //   console.log('return drom Account clas:' +this.accDetail)
            //   return this.accDetail
            // }

            // get accNumber(){
            //   //  return this.accDetail.AccountNumber;
            //   return this.accDetail
            // }

            // get accWebsite(){
            //   //  return this.accDetail.Website;
            //   return this.accDetail
            // }




}