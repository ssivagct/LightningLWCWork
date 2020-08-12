import { LightningElement, api, wire, track } from 'lwc';
import getRelatedContacts from '@salesforce/apex/accountPicker.getRelatedContacts';


export default class ContactPicker extends LightningElement {


@api accountId;
@track contactOptions;

    @wire(getRelatedContacts, {accId: '$accountId'})

    wiredcontacts({ data, error }) {
        this.contactOptions = [{ label: 'Please Select', value: '' }];
        if (data) {
            data.forEach(element => {
                const conRecord = {};
                conRecord.label = element.Name;
                conRecord.value = element.Id;
                this.contactOptions.push(conRecord);

            });
            console.log('Contact List:' +this.contactOptions);
        } else if (error) {

            console.log(error);
        }
    }

    
    conChangeHandler(event) {

        const conId = event.detail.value;
        const contactChangeEvent = new CustomEvent('contactchange', { detail: conId });
        this.dispatchEvent(contactChangeEvent);
    }
}