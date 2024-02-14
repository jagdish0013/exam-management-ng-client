import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../_services/subject.service';
declare var $: any;

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  getSubjectData: any = [];

  constructor(
    public router: Router,
    private subjectService : SubjectService
  ) { }

  ngOnInit() {
    this.getAllSubjectData();
}

addSubject(id : any) {
    if (id != 'new') {
      this.router.navigate(['/user/subject/update', id]);
    }
    else {
      this.router.navigate(['/user/subject/add', id]);
    }
  }

  getAllSubjectData() {
    var data = {
      typr: 'data'
    };
    this.subjectService.getAllSubject(data).subscribe(res => {
      console.log("res.data", res.data)

      this.getSubjectData = res.data;
    });
  }

  deleteSubject(id : any)
  {
    console.log(id);
   this.subjectService.deleteSubject(id).subscribe(res => {
      this.getAllSubjectData();
    })
  }

  searchfun(event : any)
  {
    console.log(event.target.value);
    if(!!event.target.value)
    {
      var data = {
        search : event.target.value
      };
      this.subjectService.getSearchSubject(data).subscribe(res  => {
        this.getSubjectData = res.data;
      });
    }else{
      this.getAllSubjectData();
    }
    

  }
  
}
