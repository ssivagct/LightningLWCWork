import { LightningElement, track } from 'lwc';
import getAccountRecords from '@salesforce/apex/getAccountsBySearch.getAccountRecords';

export default class AccountSearch extends LightningElement {

    @track accountKeyWord;
    @track accounts=[];


    searchKeyWord(event) {
        this.accountKeyWord = event.detail.value;
        console.log('account keyword:' + this.accountKeyWord);
    }

    getAccounts() {

        getAccountRecords({ 'searchKeywd': this.accountKeyWord }).then(result => {

            this.accounts = result;
            console.log('this accounts from SF:' + this.accounts);

            const acclst = this.accounts;
            console.log('this accounts from const:' + acclst);
            console.log('this accounts accounts:' + this.accounts);
            const accntsearchKeyword = new CustomEvent('getacccnts', { detail: acclst });
            this.dispatchEvent(accntsearchKeyword);

        }).catch(error => {

            console.log('Error' + error);
        });

        //const accts = this.accountKeyWord;
        // const acclst = this.accounts;
        // console.log('this accounts from const:' + acclst);
        // console.log('this accounts accounts:' + this.accounts);
        // const accntsearchKeyword = new CustomEvent('getacccnts', { detail: acclst });
        // this.dispatchEvent(accntsearchKeyword);
    }


}