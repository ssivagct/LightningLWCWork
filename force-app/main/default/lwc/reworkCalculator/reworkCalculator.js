import { LightningElement, track } from 'lwc';

export default class ReworkCalculator extends LightningElement {


@track firstNumber;
@track secondNumber;
@track resultNumber;
@track previousResult=[];
@track showPrevious=false;



numberValueHandler(event){
    if(event.target.name==='fnumber'){
        this.firstNumber=event.target.value;
    }else if(event.target.name==='lnumber'){
        this.secondNumber=event.target.value;
    }
}

addHandler(){
// eslint-disable-next-line radix
this.resultNumber=parseInt(this.firstNumber)+parseInt(this.secondNumber);
this.resultNumber=`Sum of ${this.firstNumber} and ${this.secondNumber} is : ${this.resultNumber}`
this.previousResult.push(this.resultNumber)
}

subHandler(){
    // eslint-disable-next-line radix
    this.resultNumber=parseInt(this.firstNumber)-parseInt(this.secondNumber);
    this.resultNumber=`Substraction of ${this.firstNumber} and ${this.secondNumber} is : ${this.resultNumber}`
    this.previousResult.push(this.resultNumber)
}

mulHandler(){
    // eslint-disable-next-line radix
    this.resultNumber=parseInt(this.firstNumber)*parseInt(this.secondNumber);
    this.resultNumber=`Multiple of ${this.firstNumber} and ${this.secondNumber} is : ${this.resultNumber}`
    this.previousResult.push(this.resultNumber)
}

divHandler(){
    // eslint-disable-next-line radix
    this.resultNumber=parseInt(this.firstNumber)/parseInt(this.secondNumber);
    this.resultNumber=`Division of ${this.firstNumber} and ${this.secondNumber} is : ${this.resultNumber}`
    this.previousResult.push(this.resultNumber)
}

checkboxValueHandler(event){
    if(event.target.checked===true)
    this.showPrevious=true
}



}