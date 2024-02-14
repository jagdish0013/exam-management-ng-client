import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  getUserData: any = [];

  constructor(
    public router: Router,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getAllUserData();
}

addUser(id : any) {
    if (id != 'new') {
      this.router.navigate(['/user/user/update', id]);
    }
    else {
      this.router.navigate(['/user/user/add', id]);
    }
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

  deleteUser(id : any)
  {
    console.log(id);
   this.userService.deleteUser(id).subscribe(res => {
      this.getAllUserData();
    })
  }

  
}
