import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const API_URL = 'http://localhost:8080/api/subject/';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  // add
  addSubject(formData : any): Observable<any>
  {
    return this.http.post(API_URL + 'add', formData,{ responseType: 'text' }).pipe(map((res: any) => JSON.parse(res)));
  }

  getAllSubject(data : any): Observable<any> {
    return this.http.post(API_URL + 'list' ,data,{ responseType: 'text' }).pipe(map((res: any) => JSON.parse(res)));
  }

  getOneSubject(id : any): Observable<any> {
    return this.http.get(API_URL + 'one/' + id)
  }

  getAllSubjectCount(): Observable<any> {
    return this.http.get(API_URL + 'count')
  }

  deleteSubject(id : any): Observable<any>
  {
    return this.http.delete(API_URL + 'delete/' +id,{ responseType: 'text' }).pipe(map(res => JSON.parse(res)));
  }

  updateSubject(formdata : any): Observable<any>
  {
    return this.http.put(API_URL + 'update',formdata,{ responseType: 'text' }).pipe(map(res => JSON.parse(res)));
  }

  getSearchSubject(data : any)
  {
    return this.http.post(API_URL + 'search',data,{ responseType: 'text' }).pipe(map(res => JSON.parse(res)));
  }
  

}
