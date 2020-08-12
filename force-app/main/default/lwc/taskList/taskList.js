import { LightningElement, track, wire } from 'lwc';
import getTasks from '@salesforce/apex/retrieveTasks.getTasks';

export default class TaskList extends LightningElement {

    @track taskList = []
    @track newTask;
    @track taskIdToDelete
    @track taskItemName

    @wire (getTasks)
    wiredtasks
    
    
    

    getTaskName(event){

        this.newTask=event.target.value;
        

    }

    addTaskHandler(){

        this.taskList.push({
            id: this.taskList.length,
            taskName: this.newTask
        })
        this.newTask='';


    }

    deleteTaskHandler(event){

        this.taskIdToDelete=event.target.name;

        for(let i=0; i<this.taskList.length; i++){
            if(this.taskList[i].id===this.taskIdToDelete){
                this.taskIdToDelete=i;
            }
        }
        console.log(this.taskIdToDelete)
        console.log('list:' +this.taskList)
        this.taskList.splice(this.taskIdToDelete, 1)
        console.log('list after:' +this.taskList)
        
    }

    getTasks(){
        this.taskList=this.wiredtasks
        console.log('Task list: ' +this.taskList)
            
        }


    


}