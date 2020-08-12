import { LightningElement, track } from 'lwc';

export default class MyFamily extends LightningElement {

    @track allMembersflag=false;
    @track allKidsflag=false;
    @track allAdultsflag=false;

@track allMembers =[{Name:'SIVAKUMAR', age:36 , Sex:'Male'} , {Name:'RENUKA', age:30, Sex:'Female'}, 
{Name:'ANICHA', age:5, Sex:'Female'}, {Name:'VINKA', age:2, Sex:'Female'}];
@track allKids =['ANICHA', 'VINKA'];
@track allAdults =['SIVAKUMAR', 'RENUKA'];

displayAllmemebers(event)
{
    this.allMembersflag=event.target.checked;
}

displayAllkids(event)
{
    this.allKidsflag=event.target.checked;
}

displayAlladults(event)
{
    this.allAdultsflag=event.target.checked;
}

}