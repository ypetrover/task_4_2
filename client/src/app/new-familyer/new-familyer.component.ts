import { Component, OnInit, ElementRef, QueryList } from '@angular/core';
import { FormBuilder, Validators, NgModel } from '@angular/forms';
import { FamilyTasksService } from '../family-tasks.service';

@Component({
  selector: 'app-new-familyer',
  templateUrl: './new-familyer.component.html',
  styleUrls: ['./new-familyer.component.css']
})
export class NewFamilyerComponent implements OnInit {

  constructor(private service: FamilyTasksService, private fb: FormBuilder) { }

  public familyName;
  private ifEdit: Boolean = false;
  public editedFam;
  public editName;
  public newFam;

  ngOnInit() {
    this.service.allFamily().subscribe(
      res => this.familyName = res,
      err => console.log(err)
    )
  }

  famForm = this.fb.group({
    name: ['', Validators.required],
    nik: [''],
    description: ['']
  });

  editFam = this.fb.group({
    name: ['', Validators.required],
    nik: [''],
    description: ['']
  });


  addFam() {
    this.service.newFam(this.famForm.value).subscribe(
      res => {
        this.newFam = res
        this.famForm = this.fb.group({
          name: ['', Validators.required],
          nik: [''],
          description: ['']
        })

        const saveUser = () => {
          if (this.famForm.dirty && this.famForm.valid) {
            alert(`Name: ${this.famForm.value.name} nik: ${this.famForm.value.nik}`);
          }
        }

        this.service.allFamily().subscribe(
          res => this.familyName = res,
          err => console.log(err)
        )
        console.log('new familyer added')
      },
      err => console.log(this.newFam.value, err)
    );
  }


  deleteFam(name) {
    this.service.deleteFam(name.value).subscribe(
      res => {
        console.log(name.value, 'is deleted')
        this.service.allFamily().subscribe(
          res => this.familyName = res,
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }

  editFalse(name) {
    console.log(name, name.value)
    this.service.oneFamily(name.value).subscribe(
      res => {
        let data: any = res
        this.editFam = this.fb.group({
          name: [data.name],
          nik: [data.nik],
          description: [data.description]
        });
      },
      err => console.log(err)
    )
    this.ifEdit = true;
  }

  name(event) {
    this.editName = event.target.value
  }

  edit() {
    const d = { name: this.editName, data: this.editFam.value }
    this.ifEdit = false;
    this.service.editFam(d).subscribe(
      res => {
        this.service.allFamily().subscribe(
          res => this.familyName = res,
          err => console.log(err)
        )
        console.log('the familyer edited')
      },
      err => console.log(err)
    )
  }


}
