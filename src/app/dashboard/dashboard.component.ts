import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../_services/subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  getProductManagement: any = [];
  count : any = 0
  Usercount : any = 0

  constructor(
    private subjectService : SubjectService,
    ) { }

  ngOnInit(): void {
    this.getAllSubject();
  }

  getAllSubject() {
    this.subjectService.getAllSubjectCount().subscribe(res => {
      console.log(res)
      this.count = res.count;
      this.Usercount = res.usercount;
    });
  }

}
