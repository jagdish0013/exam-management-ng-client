import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectComponent } from './subject.component';
import { FormSubjectComponent } from './form-subject.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectComponent,
  },
  {
    path: 'add/:id',
    component: FormSubjectComponent
  },
  {
    path: 'update/:id',
    component: FormSubjectComponent
  }
];

@NgModule({
  declarations: [
    SubjectComponent,
    FormSubjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class SubjectModule { }
