import { Component, OnInit } from '@angular/core';
import { FamilyTasksService } from '../family-tasks.service';

@Component({
  selector: 'app-all-family',
  templateUrl: './all-family.component.html',
  styleUrls: ['./all-family.component.css']
})
export class AllFamilyComponent implements OnInit {

  constructor(private service: FamilyTasksService) { }

  public family;
  public familyString;

  ngOnInit() {
    this.service.allFamily().subscribe(
      res => {
        this.family = res
        this.familyString = JSON.stringify(this.family)
      },
      err => console.log(err)
    )
  }
}
