/* eslint-disable no-undef */
import { LightningElement, track, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class ParentPicker extends LightningElement {

@track accId;
@track conId;
@track cityId;
@track inputIds=[]

@wire(CurrentPageReference) pageRef;

accountChange(event){
    this.accId=event.detail;
    this.inputIds.push(this.accId);
    console.log('Acc ID from PArent:' +this.accId);
}

contactChange(event){
    this.conId=event.detail;
    this.inputIds.push(this.conId);
    console.log('Con ID from PArent:' +this.conId);
}

citychange(event){
    this.cityId=event.detail;
    this.inputIds.push(this.cityId);
    console.log('City ID from PArent:' +this.cityId);
}

showDetail(){

    console.log('Inout IDs' +this.inputIds)
    fireEvent(this.pageRef, 'pushaccountid', this.inputIds);
    console.log('Event Fired');

}

showDom(event){

    // eslint-disable-next-line no-undef
    console.log('before template');
    //let val=this.template.querySelectorAll('div');
    //this.template.querySelector('.title-class').title='Siva'
    console.log('Template: ' +event);

}


}