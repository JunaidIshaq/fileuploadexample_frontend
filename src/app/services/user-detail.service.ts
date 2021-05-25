import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {UserDetail} from "../classes/user-detail";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  // Base URL
  private baseUrl = "http://localhost:8080/FileUploadExample/api/";

  constructor(private http: HttpClient) { }

  saveData(userDetail : UserDetail) : Observable<any> {
    return this.http.post(`${ this.baseUrl + "saveUser"}`, userDetail);
  }

  uploadFile(file: File | null, id: Promise<any>) : Observable<any> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    return this.http.post(`${this.baseUrl + "uploadImage/" + id}` , formdata);
  }
}
