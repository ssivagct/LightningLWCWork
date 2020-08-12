import { LightningElement, api, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class CarTile extends LightningElement {

    @api car;
    @api selectedCarId;

    @wire(CurrentPageReference) pageRef;

    handleCarSelect(event) {
        event.preventDefault();

        const carid = this.car.Id;
        const carselect = new CustomEvent('selectedcar', { detail: carid });
        this.dispatchEvent(carselect);

        fireEvent(this.pageRef, 'cartileclick', this.car.Id);
    }

    get isCarSelected() {
        if (this.car.Id === this.selectedCarId) {
            return 'tile selected'
        }
        return 'tile'

    }

  

}