import { LightningElement, wire, track } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class SubCheck extends LightningElement {

    @track inputName='Test'

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
console.log('insude connect call back before call');
        registerListener('pubsubevent', this.pushHandler, this)
        console.log('insude connect call back after call');
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    pushHandler(payload) {
        console.log('insude push handler');
        this.inputName = payload;
        
       // console.log('Result:' + this.inputName);

    }

} 