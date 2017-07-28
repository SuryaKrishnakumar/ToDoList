import { Component } from '@angular/core';

@Component({
  selector: 'add-task',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css']
})
export class AddTaskComponent {
    addTaskTitle: string;
    tasks: string[];

    constructor(){
        this.tasks = ['Learn angular', 'Create sample app', 'Test sample app'];
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(i){
        this.tasks.splice(i,1);
    }
}