import { LightningElement, track } from 'lwc';
import getPostOfficeName from '@salesforce/apex/PostOfficeAPIClass.getPostOfficeName';

export default class PostOfficeLWC extends LightningElement {

    @track
    isLoading = false;
    postCode;

    @track
    outPut;

    @track
    splitOutput=['siva', 'Vinka']
    outputReady = false;

    inputHandler(event) {
        this.postCode = event.target.value;
        console.log('post oce input:' +this.postCode)
    }

    getDataFromSF() {
console.log('button clicked')
        
        getPostOfficeName({'postCode': this.postCode})
            .then(result => {
                this.isLoading = true;
                this.outputReady = true;
                this.outPut = result;
                //this.splitOutput=this.outPut.split(',');
                console.log('Output in JS:' +this.outPut)
                console.log('Type of' +typeof this.outPut)
                this.isLoading = false

            })
            .catch(error => {
                this.error = error;
                this.isLoading = false
            });
      
    }
}