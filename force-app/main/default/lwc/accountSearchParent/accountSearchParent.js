import { LightningElement, track } from 'lwc';


export default class AccountSearchParent extends LightningElement {

 //   @track accntsKw;
    @track accnts;

    getRelatedAccounts(event){
this.accnts=event.detail;
console.log('From parent event' +this.accnts);

    }
}