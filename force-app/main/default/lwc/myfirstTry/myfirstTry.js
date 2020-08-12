import { LightningElement, track } from 'lwc';

export default class MyfirstTry extends LightningElement {

    @track checkboxFlag= false;
@track operators = [
    'Add', 'Subtract', 'Divide', 'Multiply'
];

enableBox(event)
{
this.checkboxFlag=event.target.checked;
}

}