import { LightningElement, track } from 'lwc';

export default class NameSearch extends LightningElement {

@track Name=[]
@track keyWord;
@track candidateDetails=[
    {id: 1, name: 'Anicha', age: 5, country: 'Australia'},
    {id: 2, name: 'Sidhu', age: 52, country: 'India'},
    {id: 3, name: 'Glenn', age: 35, country: 'Australia'},
    {id: 4, name: 'Robin', age: 55, country: 'England'},
    {id: 5, name: 'Singh', age: 45, country: 'India'},
    {id: 6, name: 'Vinka', age: 5, country: 'Australia'},
    {id: 7, name: 'Siva', age: 25, country: 'India'},
    {id: 8, name: 'Java', age: 15, country: 'Kenya'}    
    ]

getName(event)
{
this.keyWord=event.target.value;
console.debug('ID' +this.keyWord);

}

displayName()
{
    // for(let i=0; i<this.candidateDetails.length; i++){
    //     if(this.candidateDetails[i].id==this.keyWord)
    //     {
    //         this.Name=this.candidateDetails[i].name;
    //         console.log(this.candidateDetails[i].name);
    //     }
         
    // }
    this.Name=[]
    for(let i=0; i<this.candidateDetails.length; i++){
        if(this.candidateDetails[i].country==this.keyWord)
        {
            this.Name.push(this.candidateDetails[i]);
            console.log(this.candidateDetails[i]);
        }
         
    }
}

}