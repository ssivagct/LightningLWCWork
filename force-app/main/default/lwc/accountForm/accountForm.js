import { LightningElement, track } from 'lwc';
import createnewAccount from '@salesforce/apex/accountName.createnewAccount';

export default class AccountForm extends LightningElement {

   @track accObject={}

   valueChangeHandler(event){
       var targetElement=event.target;
       console.log('Check' +targetElement.dataset.fieldname)
       this.accObject[targetElement.dataset.fieldname]=targetElement.value;
   }

   formSubmitHandler(){

    // eslint-disable-next-line no-unused-vars
    console.log('Account Data:' +this.accObject);
    // eslint-disable-next-line no-unused-vars
    createnewAccount({accobj: this.accObject}).then(result =>{
        // eslint-disable-next-line no-alert
        alert('Record created');
    // eslint-disable-next-line no-unused-vars
    }).catch(error => {

        console.log('Error')
    });
   }

}