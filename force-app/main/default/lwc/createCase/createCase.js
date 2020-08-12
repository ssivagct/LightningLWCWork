import { LightningElement, track } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";

export default class CreateCase extends LightningElement {
@track casesub
@track caseorg

handleSubject(event)
{
    this.casesub=event.target.value;
    console.log('subject:' +this.casesub);
}

handleCaseorgin(event)
{
    this.caseorg=event.target.value;
    console.log('subject:' +this.caseorg);
}

saveHandler()
{
    const fields={'Name': this.casesub};
    const recordInput={apiName: 'Account' , objData};
    
    createRecord(recordInput);
    /*
    .then(response => {
console.log('Success');
    }).catch(error => {
        console.log('Error Occured');
     }); */
}

}