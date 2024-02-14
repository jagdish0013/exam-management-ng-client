import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8080/api/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }


  // add
  addUser(formData : any): Observable<any>
  {
    return this.http.post(API_URL + 'add', formData,{ responseType: 'text' }).pipe(map((res: any) => JSON.parse(res)));
  }

  getAllUser(data : any): Observable<any> {
    return this.http.post(API_URL + 'list' ,data,{ responseType: 'text' }).pipe(map((res: any) => JSON.parse(res)));
  }

  getOneUser(id : any): Observable<any> {
    return this.http.get(API_URL + 'one/' + id)
  }

  deleteUser(id : any): Observable<any>
  {
    return this.http.delete(API_URL + 'delete/' +id,{ responseType: 'text' }).pipe(map(res => JSON.parse(res)));
  }
  

}
