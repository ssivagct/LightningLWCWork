import { LightningElement, track, wire } from 'lwc';
import getCarTypes from '@salesforce/apex/carSearchFormController.getCarTypes';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CarSearchForm extends NavigationMixin(LightningElement) {

 @track carTypeOptions;

@wire(getCarTypes)
wiredCarType({data, error}) {
    if(data){
     this.carTypeOptions=[{value:'',label: 'All Types'}]
      data.forEach(element => {
          const carType={};
          carType.label=element.Name;
          carType.value=element.Id;
          this.carTypeOptions.push(carType);
          
      });
    } else if(error){
console.log('Error')
this.showErrorPopup('Error', error.body.message , error)
    }
}

 carTypeChangeHandler(event){
 
    const carTypeId=event.detail.value;
    const carTypeSelectionChangeEvent = new CustomEvent('cartypeselect', {detail: carTypeId})
    this.dispatchEvent(carTypeSelectionChangeEvent);

 }
 
 createCarType(){
    this[NavigationMixin.Navigate]({
        type : 'standard__objectPage',
        attributes: {            
            objectApiName: 'Car_Type__c', // objectApiName is optional
            actionName: 'new'
        }
    });

 }

 showErrorPopup(title, message, variant){
 const evt = new ShowToastEvent({
    title: title,
    message: message,
    variant: variant,
    mode: 'dismissable'
});
this.dispatchEvent(evt);
 }

}