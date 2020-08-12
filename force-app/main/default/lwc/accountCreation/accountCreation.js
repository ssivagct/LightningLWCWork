import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/createAccount_Form.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountCreation extends NavigationMixin(LightningElement) {


 @track accountRecord={
    Name:'', AccountNumber:'',Fax:'',Website:'',NumberOfEmployees:'',Rating:''
    }
@track args_string;
@track ratingValue = '--None--';
@track saveDraftSubmit=false;

    handleFormInputChange(event){
        if(event.target.name==='acctname'){
            this.accountRecord.Name=event.target.value;
        } else if (event.target.name==='accNumber')
        this.accountRecord.AccountNumber=event.target.value;
        else if (event.target.name==='accFax')
        this.accountRecord.Fax=event.target.value;
        else if (event.target.name==='accWebsite')
        this.accountRecord.Website=event.target.value;
        else if (event.target.name==='accEmployees')
        this.accountRecord.NumberOfEmployees=event.target.value;
        else if (event.target.name==='accRating')
        this.accountRecord.Rating=event.target.value;
    }

    get ratingOptions() {
        return [
                 { label: 'Hot', value: 'Hot' },
                 { label: 'Warm', value: 'Warm' },
                 { label: 'Cold', value: 'Cold' },
               ];
    }

    handleChangePicklist(event) {
        if(event.target.name==='ratingPicklist'){
        this.ratingValue = event.detail.value;
        this.accountRecord.Rating=event.detail.value;
        console.debug('fine');
        }
     }

    handleFormSubmit(){
        this.saveDraftSubmit=true;
console.log('Output:' +this.accountRecord.Name);
console.log('Output:' +this.accountRecord.AccountNumber);
this.args_string = JSON.stringify(this.accountRecord);
//const accID=createAccount({Name: this.accountRecord.Name, AccountNumber: this.accountRecord.accNumber});
createAccount({"accinput": this.args_string}).then(result => {
            
    const accID=result;
    console.log(`Account  (ID: ${accID}) Created Successfully`);
    this.saveDraftSubmit=false;
    const evt = new ShowToastEvent({
        title: 'Record Creation',
        message: `Account (ID: ${accID}) has been Created Successfully`,
        variant: 'Success',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);

    this[NavigationMixin.Navigate]({
        type : 'standard__recordPage',
        attributes: {
            recordId: accID,
            objectApiName: 'Account', // objectApiName is optional
            actionName: 'edit'
        }
    });

}).catch(error => {
    this.saveDraftSubmit=false;
    console.log('Error' +error);
});
//console.log('Result:' +this.args_string);
//console.log(`Account  (ID: ${accID}) Created Successfully`);
    }
}