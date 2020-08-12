import { LightningElement, track } from 'lwc';

export default class ConditionCheck extends LightningElement {
@track cNametype=false;

displayName(event)
{
    this.cNametype= event.target.checked;
    
}

}