import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
// import { ProductManagementService } from '../../../service/index';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    ],
    //schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [RouterModule],
    // providers: [ProductManagementService]
})
export class DashboardModule { }
