import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FamilyTasksService } from '../family-tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(private service: FamilyTasksService, private fb: FormBuilder) { }

  public familyName;
  ngOnInit() {
    this.service.allFamily().subscribe(
      res => this.familyName = res,
      err => console.log(err)
    )
  }

  public newTask;
  public date:any = new Date().toLocaleDateString()	;
  taskForm = this.fb.group({
    description: [''],
    date: [this.date],
    name: [''],
  });

  public addTask() {
    this.service.newTask(this.taskForm.value).subscribe(
      res => {
        this.newTask = res
        this.taskForm = this.fb.group({
          description: [''],
          date: [this.date],
          name: [''],
        })
      },
      err => console.log(this.taskForm.value, err)
    )
  }
}
