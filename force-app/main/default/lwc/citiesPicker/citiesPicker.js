import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import getRelatedCities from '@salesforce/apex/accountPicker.getRelatedCities';

export default class CitiesPicker extends LightningElement {

@api conId;
@track cityOptions;

    @wire(getRelatedCities, {conId: '$conId'})

    wiredcontacts({ data, error }) {
        this.cityOptions = [{ label: 'Please Select', value: '' }];
        if (data) {
            data.forEach(element => {
                const cityRecord = {};
                cityRecord .label = element.Name;
                cityRecord .value = element.Id;
                this.cityOptions.push(cityRecord );

            });
            if(this.cityOptions.length<2){
            this.showErrorPopup('Error', 'Value doesn\'t exist' , error)
            }
        } else if (error) {

            console.log(error);
        }
    }

    
    cityChangeHandler(event) {

        const conId = event.detail.value;
        const cityChangeEvent = new CustomEvent('citychange', { detail: conId });
        this.dispatchEvent(cityChangeEvent);
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