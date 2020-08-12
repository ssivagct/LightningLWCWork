import { LightningElement, track } from 'lwc';

export default class ParentTabs extends LightningElement {

@track showCalc=false;
@track showAccTable=false;
@track showSecond=false;

tabaccHandler(){
this.showAccTable=true;
    }

    tabcalcHandler(){
        this.showCalc=true;
            }


            tableHandler(){
this.showSecond=true;
            }
     

}