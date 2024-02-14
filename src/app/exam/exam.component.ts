import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../_services/exam.service';
declare var $: any;

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  getExamData: any = [];

  constructor(
    public router: Router,
    private examService : ExamService
  ) { }

  ngOnInit() {
    this.getAllExamData();
    
}

  addExam(id : any) {
    if (id != 'new') {
      this.router.navigate(['/user/exam/update', id]);
    }
    else {
      this.router.navigate(['/user/exam/add', id]);
    }
  }

  getAllExamData() {
    var data = {
      typr: 'data'
    };
    this.examService.getAllExam(data).subscribe(res => {
      console.log("res.data", res.data)

      this.getExamData = res.data;
    });
  }

  deleteExam(id : any)
  {
    console.log(id);
   this.examService.deleteExam(id).subscribe(res => {
      this.getAllExamData();
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
      this.examService.getSearchExam(data).subscribe(res  => {
        this.getExamData = res.data;
      });
    }else{
      this.getAllExamData();
    }
    

  }
  
}
