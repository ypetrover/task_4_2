import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FamilyTasksService } from '../family-tasks.service';

@Component({
  selector: 'app-new-familyer',
  templateUrl: './new-familyer.component.html',
  styleUrls: ['./new-familyer.component.css']
})
export class NewFamilyerComponent implements OnInit {

  constructor(private service: FamilyTasksService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  public newFam;
  famForm = this.fb.group({
    name: [''],
    nik: [''],
    description: ['']
  });

  addFam() {
    this.service.newFam(this.famForm.value).subscribe(
      res => {
        this.newFam = res
        this.famForm = this.fb.group({
          name: [''],
          nik: [''],
          description: ['']
        })
      },
      err => console.log(this.newFam.value, err)
    );
  }
}
