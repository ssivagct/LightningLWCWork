import { LightningElement } from 'lwc';

export default class ParentPicklist extends LightningElement {

inputValue

    getInput(event)
{
    this.inputValue=event.target.value;
}

buttonClick(){
    const childComp=this.template.querySelector('c-child-picklist');
    childComp.changeRatingValue(this.inputValue);
}


}