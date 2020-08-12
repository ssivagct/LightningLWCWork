import { LightningElement, api } from 'lwc';

export default class ChildCalculator extends LightningElement {


 @api calcTitle='Calculator (Child)'
 @api firstNumberLabel='Enter First Number'
 @api lastNumberLabel='Enter Last Number'
 @api sumButtonLabel='Sum'
 @api subtractButtonLabel='Sub'
 hintMessage
    firstValue
    secondValue
    resultValue

    onchangeNameHandler(event){
if(event.target.name==='fname')
this.firstValue=event.target.value;
else if(event.target.name==='lname')
this.secondValue=event.target.value;

    }

    buttonClickHandler(event){
        if(event.target.name==='sum'){
// eslint-disable-next-line radix
this.resultValue=parseInt(this.firstValue)+parseInt(this.secondValue);
        }else if(event.target.name==='sub'){
// eslint-disable-next-line radix
this.resultValue=parseInt(this.firstValue)-parseInt(this.secondValue);
        }
    }

    showMessage(){
        this.hintMessage='success';
    }
}

