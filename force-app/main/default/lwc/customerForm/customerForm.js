import { LightningElement, track } from 'lwc';
import createAccount from '@salesforce/apex/customerForm_Handler.createAccount';
import createContact from '@salesforce/apex/customerForm_Handler.createContact';
import createCase from'@salesforce/apex/customerForm_Handler.createCase';

export default class CustomerForm extends LightningElement {

 @track accountRecord={
        Name:'', AccountNumber:'',Fax:'',Website:'',NumberOfEmployees:'',Rating:''
        }
 @track contactRecord={
            FirstName:'', LastName:'',MobilePhone:'',Email:'', AccountId:''
        }
@track caseRecord={
        Subject:'', Status:'',Priority:'',Origin:'', AccountId:'', ContactId:''
        }

@track accountRating='--none--'
@track caseStatus='--none--'
@track casePriority='--none--'
@track caseOrigin='--none--'
@track formSubmit= false
@track contactString
@track accountString
@track caseString

accID
conID



        handleFormInputChange(event){
            if(event.target.name==='acctname'){
                this.accountRecord.Name=event.target.value;
            } else if (event.target.name==='accNumber')
            this.accountRecord.AccountNumber=event.target.value;
            else if (event.target.name==='accFax')
            this.accountRecord.Fax=event.target.value;
            else if (event.target.name==='accWebsite')
            this.accountRecord.Website=event.target.value;
            else if (event.target.name==='accEmployees')
            this.accountRecord.NumberOfEmployees=event.target.value;
            else if (event.target.name==='accRating')
            this.accountRecord.Rating=event.target.value;

            if(event.target.name==='conFname'){
                this.contactRecord.FirstName=event.target.value;
            } else if (event.target.name==='conLname')
            this.contactRecord.LastName=event.target.value;
            else if (event.target.name==='conMobile')
            this.contactRecord.MobilePhone=event.target.value;
            else if (event.target.name==='conEmail')
            this.contactRecord.Email=event.target.value;

            if(event.target.name==='caseSub'){
                this.caseRecord.Subject=event.target.value;
            } else if (event.target.name==='Casestatus')
            this.caseRecord.Status=event.target.value;
            else if (event.target.name==='casePriority')
            this.caseRecord.Priority=event.target.value;
            else if (event.target.name==='caseOrigin')
            this.caseRecord.Origin=event.target.value;
        }

        get ratingOptions() {
            return [
                     { label: 'Hot', value: 'Hot' },
                     { label: 'Warm', value: 'Warm' },
                     { label: 'Cold', value: 'Cold' },
                   ];
        }

        get statusOptions() {
            return [
                     { label: 'Enquiring for the first time', value: 'New' },
                     { label: 'Raised withing 2 weeks', value: 'Working' },
                     { label: 'No response for more than 2 weeks', value: 'Escalated' },
                   ];
        }


        get priorityOptions() {
            return [
                     { label: 'Immediate action required', value: 'High' },
                     { label: 'good to resolve soon', value: 'Medium' },
                     { label: 'Not urgent but nice to have', value: 'Low' },
                   ];
        }

        get originOptions() {
            return [
                     { label: 'Got a call', value: 'Phone' },
                     { label: 'Received an email', value: 'Email' },
                     { label: 'Through web chat', value: 'Web' },
                   ];
        }
    
        handleChangePicklist(event) {
            if(event.target.name==='ratingPicklist'){
            this.accountRating = event.detail.value;
            this.accountRecord.Rating=event.detail.value;
            }else if(event.target.name==='statusPicklist'){
                this.caseStatus = event.detail.value;
                this.caseRecord.Status=event.detail.value;
            }else if(event.target.name==='priorityPicklist'){
                    this.casePriority = event.detail.value;
                    this.caseRecord.Priority=event.detail.value;
            }else if(event.target.name==='originPicklist'){
                this.caseOrigin = event.detail.value;
                this.caseRecord.Origin=event.detail.value;
         }

        }

        checkDom(){
            let changeColor=this.template.querySelectorAll('.section-title');
            changeColor[0].style.color='green';
            changeColor[1].style.color='red';
            changeColor[2].style.color='blue';
            changeColor[0].title='Account';
            changeColor[1].title='Contact Information';
            changeColor[2].title='Case Information';
            changeColor[1].children[1].value='Tester'
            
            //console.log('User name:' +this.template.querySelector('lightning-card').title);
        }

        submitFormHandler(){
        this.formSubmit=true;

        this.accountString = JSON.stringify(this.accountRecord);
        this.contactString = JSON.stringify(this.contactRecord);
        this.caseString = JSON.stringify(this.caseRecord);

        console.log('Account Data' +this.accountString);
        console.log('Contact Data' +this.contactString);
        console.log('Case Data' +this.caseString);

        createAccount({"accDetails": this.accountString}).then(result => {
        
            this.accID=result;
            console.log(`Account  (ID: ${this.accID}) Created Successfully`);
            this.contactRecord.AccountId=this.accID;
            this.caseRecord.AccountId=this.accID;
    
        }).catch(error => {
            this.formSubmit=false;
            console.log('Error' +error);
        });

        createContact({"conDetails": this.contactString}).then(result => {
        
            this.conID=result;
            console.log(`Contact  (ID: ${this.conID}) Created Successfully`);
            this.caseRecord.ContactId=this.conID;
    
        }).catch(error => {
            this.formSubmit=false;
            console.log('Error' +error);
        });


        createCase({"caseDetails": this.caseString}).then(result => {
        
            const casID=result;
            console.log(`Case  (ID: ${casID}) Created Successfully`);
            console.log('Account Data' +this.accountString);
            console.log('Contact Data' +this.contactString);
            console.log('Case Data' +this.caseString);
            this.formSubmit=false;
    
        }).catch(error => {
            this.formSubmit=false;
            console.log('Error' +error);
        });

            }
}