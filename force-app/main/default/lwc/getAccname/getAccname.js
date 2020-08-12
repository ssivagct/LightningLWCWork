import { LightningElement, track } from 'lwc';
import getaccountName from '@salesforce/apex/accountName.getaccountName';
import createAccount from '@salesforce/apex/accountName.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class GetAccname extends LightningElement {

    @track accName
    @track isaccexists=false
    @track accinputName
 
    saveHandler(event){
        
        getaccountName({}).then(result =>{
            console.log(result);  
            this.accName=result;
            this.isaccexists=true;
            
        }).catch(error => {
            
            console.error(error)
        })
    }

    accountNamehandler(event){

        this.accinputName=event.target.value;
    }

    accSavehandler(event)
    {
        createAccount({"accinput": this.accinputName}).then(result =>{
            console.log(result);  
            //this.accName=result;
           // this.isaccexists=true;
           const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Account has been created sucessfully. ID' +result +'',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
            
        }).catch(error => {
            
            console.error(error)
        })
    }


}