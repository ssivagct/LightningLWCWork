import { LightningElement, track } from 'lwc';

export default class NameConcatenation extends LightningElement {

   @track fName;
   @track lName;
   @track fullName='blank';

   concatLogic(event)
   {
this.fullName="SIVA";
//this.fullName=event.target.value;
   }

}