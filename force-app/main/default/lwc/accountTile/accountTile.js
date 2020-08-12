import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountTile extends NavigationMixin(LightningElement) {

  //  @api accnts;
    @api accRecord;


    redirectAccountPage(){
        console.log('Acc Record:' +this.accRecord.Id);
    this[NavigationMixin.Navigate]({
        type : 'standard__recordPage',
        attributes: {
            recordId: this.accRecord.Id,
            objectApiName: 'Account', // objectApiName is optional
            actionName: 'view'
        }
    });
}


}