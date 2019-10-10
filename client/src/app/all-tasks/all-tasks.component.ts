import { Component, OnInit } from '@angular/core';
import { FamilyTasksService } from '../family-tasks.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  constructor(private service: FamilyTasksService) { }

  public allTasks;

  ngOnInit() {
    this.service.allTasks().subscribe(
      res => this.allTasks = res,
      err => console.log(err)
    )
  }

  deleteTask(id) {
    this.service.delete(id).subscribe(
      res => {
        console.log(res)
        this.service.allTasks().subscribe(
          res => this.allTasks = res,
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }
}