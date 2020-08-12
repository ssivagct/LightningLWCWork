import { LightningElement, track } from 'lwc';
export default class MyComponentName extends LightningElement {

    @track value = ['option1'];

    get options() {
        return [
            { label: 'RossPlease agree option1', value: 'option1' },
            { label: 'Please agree condition 2', value: 'option2' },
            { label: 'Austrlaian PR holder?', value: 'option3' },
            { label: 'Degree holder?', value: 'option4' },
            { label: 'Any offences in history?', value: 'option5' },
            { label: 'Agree aLL the above', value: 'option6' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
    }
}
