import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExamComponent } from './exam.component';
import { FormExamComponent } from './form-exam.component';

const routes: Routes = [
  {
    path: '',
    component: ExamComponent,
  },
  {
    path: 'add/:id',
    component: FormExamComponent
  },
  {
    path: 'update/:id',
    component: FormExamComponent
  }
];

@NgModule({
  declarations: [
    ExamComponent,
    FormExamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ExamModule { }
