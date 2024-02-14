import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-navemenu',
  templateUrl: './navemenu.component.html',
  styleUrls: ['./navemenu.component.css']
})
export class NavemenuComponent implements OnInit {

  roles: any;
  constructor(
    private storageService: StorageService) {
      
   }
   
  ngOnInit(): void {
    this.roles = this.storageService.getUser().role;
  }

}
