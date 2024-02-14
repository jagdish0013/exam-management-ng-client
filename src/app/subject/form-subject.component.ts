import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SubjectService } from '../_services/subject.service';

@Component({
  selector: 'app-form-subject',
  templateUrl: './form-subject.component.html',
  
})
export class FormSubjectComponent implements OnInit {

  rForm: FormGroup;
  id: any;
  getOneSubject: any = [];
  inputEl: any;
  imageFile: any;

  constructor(
    public router: Router,
    private el: ElementRef, 
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public subjectService: SubjectService
  ) {
    this.rForm = fb.group({
      'subject_name': [null, Validators.required],
      'subject_code': [null, Validators.required],
      'description': [null, Validators.required],
    })
  }

  ngOnInit(): void {


      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        if (this.id != "new") {
            this.subjectService.getOneSubject(this.id).subscribe(res => {
              console.log("res.data-------", res.data)
            this.getOneSubject = res.data;
          })
        }
      })

    

    
  }

  // // add data
  addSubject(formdata : any) {
    console.log("this.id--------", this.id);
    console.log("this.id--------", this.rForm.value);
    if (this.rForm.valid) {
      if (this.id != "new") {
        formdata.id = this.id;
        this.subjectService.updateSubject(formdata).subscribe(res => {
          if (res.success === true) {
            this.router.navigate(['/user/subject']);
          }
          else {
            console.log("error")
          }
        })
      }
      else {

        this.subjectService.addSubject(this.rForm.value).subscribe(res => {
          console.log(res)
          if (res.success === true) {
            this.router.navigate(['/user/subject']);
          }
          else {
            console.log("error")
          }
        });
      }
    }
  }
}
