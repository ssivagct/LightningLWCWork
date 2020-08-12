import { LightningElement, api } from 'lwc';

export default class ChildPicklist extends LightningElement {



    ratingValue = 'Cold';

    ratingOptions=[
                 { label: 'Hot', value: 'Hot' },
                 { label: 'Warm', value: 'Warm' },
                 { label: 'Cold', value: 'Cold' }
               ];

               @api
               changeRatingValue(inputValue){
                   this.ratingValue=inputValue;
               }

               connectedCallback(){

                this.ratingValue='Warm'
               }


    }
