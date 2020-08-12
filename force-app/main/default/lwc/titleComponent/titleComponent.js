import { LightningElement,track, wire } from 'lwc';
import getLoggedUserName from '@salesforce/apex/getLoginUserName.getLoggedUserName';

export default class TitleComponent extends LightningElement {

    @track loggedinUser;
    @track loggedinUserName;
    @track result

    @wire (getLoggedUserName)
    wireduser({data, error}){
        if(data){
         
                this.loggedinUserName=data.Username;
                
         
            
        }else if(error){
            console.log('Error ocuured');
        }
        //this.result=this.template.getElementById('tes-gm').value;
        //this.result.styleColor='#fff';
        //this.result.style.background='#777';
      
    }

    checkDom(){
        this.template.querySelector('lightning-card').title="Welcome '${loggedinUserName}'";
        console.log('User name:' +this.template.querySelector('lightning-card').title);
    }
}