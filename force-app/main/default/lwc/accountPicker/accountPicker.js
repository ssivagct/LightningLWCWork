import { LightningElement, track, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/accountPicker.getAccounts';

export default class AccountPicker extends LightningElement {


    @track accountOptions;
    @track accountsList;
    @api accountId;

    @wire(getAccounts)
    wiredaccounts({ data, error }) {
        this.accountOptions = [{ label: 'Please Select', value: '' }];
        if (data) {
            data.forEach(element => {
                const accRecord = {};
                accRecord.label = element.Name;
                accRecord.value = element.Id;
                this.accountOptions.push(accRecord);

            });
        } else if (error) {

            console.log(error);
        }
    }

    accChangeHandler(event) {

        const accntId = event.detail.value;
        console.log('Account ID:' +accntId);
        const accntChangeEvent = new CustomEvent('accountchange', { detail: accntId });
        this.dispatchEvent(accntChangeEvent);
    }


}