import { LightningElement, track } from 'lwc';

export default class ProjCalculator extends LightningElement {
    @track fNumber;
    @track sNumber;

    @track finalNumber;

    getFirstnumber(event)
    {
        const inpNumber=event.target.name;
        if(inpNumber==="firstNumber")
        {
            this.fNumber=event.target.value;
        }
        if(inpNumber==="secondNumber")
        {
            this.sNumber=event.target.value;
        }
    }
    addResult(event)
    {
       this.finalNumber= parseInt(this.fNumber)+parseInt(this.sNumber);
    }

}