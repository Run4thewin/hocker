import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  options!: {
    headers?: HttpHeaders | { [header: string]: string | string[]; };
  };

  apiURL = "";

  addForm(form : any) : Observable<any>{
    return this.http.post(this.apiURL, form, this.options);
  }
}
