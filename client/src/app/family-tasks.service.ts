import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class FamilyTasksService {

  constructor(private http: HttpClient) { }

  public allFamily() {
    return this.http.get('http://localhost:3000/api/all-family')
  }
  
  public oneFamily(name) {
    return this.http.get(`http://localhost:3000/api/all-family/${name}`)
  }

  public allTasks() {
    return this.http.get('http://localhost:3000/api/all-tasks')
  }

  public newTask(task) {
    return this.http.post('http://localhost:3000/api/new-task', task)
  }
  
  public delete(id) {
    return this.http.delete(`http://localhost:3000/api/delete/${id}`)
  }
  
  public newFam(task) {
    return this.http.post('http://localhost:3000/api/new-familyer', task)
  }
  
  public deleteFam(name) {
    return this.http.delete(`http://localhost:3000/api/delete-familyer/${name}`)
  }
  
  public editFam(data) {
    return this.http.get(`http://localhost:3000/api/edit-familyer/${data.name}/?name=${data.data.name}&nik=${data.data.nik}&desc=${data.data.description}`)
  }

}
