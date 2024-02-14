import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../_services/exam.service';
import { UserService } from '../_services/user.service';
import { SubjectService } from '../_services/subject.service';

@Component({
  selector: 'app-form-exam',
  templateUrl: './form-exam.component.html',
  
})
export class FormExamComponent implements OnInit {

  rForm: FormGroup;
  id: any;
  getOneExam: any = [];
  inputEl: any;
  dateTime: string = this.getCurrentDateTime();
  getUserData : any
  selectedOptions: string[] = [];
  getSubjectData : any;
  subject : any
  examTypes: string[] = ['Mock Test', 'Main Exam'];
  selectedExam: string = this.examTypes[0];

  getCurrentDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.padZero(now.getMonth() + 1);
    const day = this.padZero(now.getDate());
    const hours = this.padZero(now.getHours());
    const minutes = this.padZero(now.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
}
  

  constructor(
    public router: Router,
    private el: ElementRef, 
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public examService: ExamService,
    public userService:UserService,
    public subjectService:SubjectService
  ) {
    this.rForm = fb.group({
      'exam_name': [null, Validators.required],
      'description': [null, Validators.required],
      'dateTime' : [null],
      'users' : [null],
      'subject' : [null],
      'type': [null]
    })
  }

  ngOnInit(): void {


      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        if (this.id != "new") {
            this.examService.getOneExam(this.id).subscribe(res => {
            this.getOneExam = res.data;
          })
        }
      })

      this.getAllUserData();
      this.getAllSubjectData()

    

    
  }

  getAllUserData() {
    var data = {
      typr: 'data'
    };
    this.userService.getAllUser(data).subscribe(res => {
      console.log("res.data", res.data)

      this.getUserData = res.data;
    });
  }

  getAllSubjectData() {
    var data = {
      typr: 'data'
    };
    this.subjectService.getAllSubject(data).subscribe(res => {
      console.log("res.data-------", res.data)

      this.getSubjectData = res.data;
    });
  }

  // // add data
  addExam(formdata : any) {
    console.log("this.id", this.id);
    if (this.rForm.valid) {
      if (this.id != "new") {
        formdata.id = this.id;
        this.examService.updateExam(formdata).subscribe(res => {
          if (res.success === true) {
            this.router.navigate(['/user/exam']);
          }
          else {
            console.log("error")
          }
        })
      }
      else {

        console.log("this.rForm", this.rForm);
      
        this.examService.addExam(this.rForm.value).subscribe(res => {
          console.log(res)
          if (res.success === true) {
            this.router.navigate(['/user/exam']);
          }
          else {
            console.log("error")
          }
        });
      }
    }
  }
}
