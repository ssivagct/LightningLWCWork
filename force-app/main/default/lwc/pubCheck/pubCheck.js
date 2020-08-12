import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class PubCheck extends LightningElement {

    @track nameDetail = 'Ram';

    @wire(CurrentPageReference) pageRef;

    getName(event) {
        this.nameDetail = event.target.value;
        console.log('nameDetail: ' +this.nameDetail)

    }

    pushData() {
        var eventParam = this.nameDetail;
        console.log('Name D' +eventParam)
        fireEvent(this.pageRef, 'pubsubevent', eventParam);
        console.log('Event Fired detail' +fireEvent);

        console.log('Event Fired');

    }

}