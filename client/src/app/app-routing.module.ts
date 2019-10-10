import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AllFamilyComponent } from './all-family/all-family.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewFamilyerComponent } from './new-familyer/new-familyer.component';


const routes: Routes = [
  {
    path: 'all-tasks',
    component: AllTasksComponent
  },
  {
    path: 'all-family',
    component: AllFamilyComponent
  },
  {
    path: 'new-task',
    component: NewTaskComponent
  },
  {
    path: 'new-familyer',
    component: NewFamilyerComponent
  },
  {
    path: '',
    redirectTo: 'all-tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
