import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "";

  //Remove this ! later

  options!: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
  }

  constructor(private http : HttpClient) { }

  addForm(form: any) : Observable<any>{
    
    console.log (form);
    return this.http.post(this.url, form, this.options)

  }
}
