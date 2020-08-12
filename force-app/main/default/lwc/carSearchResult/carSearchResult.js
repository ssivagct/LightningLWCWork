import { LightningElement, api, track, wire } from 'lwc';
import getCars from '@salesforce/apex/CarSearchResultController.getCars';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CarSearchResult extends LightningElement {


    @api carTypeId
    @track carsList
    @track selectCarId

    @wire(getCars, { carTypeId: '$carTypeId' })
    wiredCar({ data, error }) {
        if (data) {
            this.carsList = data;
        } else if (error) {
            this.showErrorPopup('Error', error.body.message, error)
        }
    }

    // eslint-disable-next-line no-unused-vars
    selectCar(event) {
        const carId = event.detail;
        this.selectCarId = carId;
    }


    showErrorPopup(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }

    get carsFound() {
        if (this.cars) {
            return true;
        }
        return false;
    }

}