import { LightningElement, track } from 'lwc';

export default class OpenNewbrowser extends LightningElement {

 @track  promptInput;
    launchHandler(){

        this.promptInput=prompt("Enter Site Name: ")
        window.open(`https://${this.promptInput}.com`)
        window.alert(this.promptInput)
    }
}