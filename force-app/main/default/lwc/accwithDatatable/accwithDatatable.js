import { LightningElement, track, wire, api } from 'lwc';
import getAccounts from '@salesforce/apex/returnAccounts.getAccounts';

export default class AccwithDatatable extends LightningElement {

@track accountDetails;
@track uploadedFiles;
@api myRecordId;

@track columns= [{ label: 'Acc Name', fieldName: 'Name' },
{ label: 'Website', fieldName: 'Website', type: 'url' },
{ label: 'Phone', fieldName: 'Phone', type: 'phone' },

] ;

@wire (getAccounts)
wiredaccounts({data, error}){

    if(data){
        this.accountDetails=data;
    } else if(error){
        console.log('Error')
    }
    console.log('Account Data' +this.accountDetails)
}

get acceptedFormats() {
    return ['.pdf', '.png'];
}

handleUploadFinished(event) {
    // Get the list of uploaded files
    this.uploadedFiles = event.detail.files;
 
}
}
