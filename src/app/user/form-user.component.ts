import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  
})
export class FormUserComponent implements OnInit {

  rForm: FormGroup;
  id: any;
  inputEl: any;
  roles: string[] = ['user', 'admin'];
  selectedRole: string = this.roles[0];

  constructor(
    public router: Router,
    private el: ElementRef, 
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public userService: UserService
  ) {
    this.rForm = fb.group({
      'username': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required],
      'role': [null],
    })
  }

  ngOnInit(): void {


      this.activatedRoute.params.subscribe((params: Params) => {
        this.id = params['id'];
        
      })

    

    
  }

  // // add data
  addUser(formdata : any) {
    if (this.rForm.valid) {
      if (this.id != "new") {
      }
      else {
        this.userService.addUser(this.rForm.value).subscribe(res => {
          console.log(res)
          if (res.success === true) {
            this.router.navigate(['/user/user']);
          }
          else {
            console.log("error")
          }
        });
      }
    }
  }
}
