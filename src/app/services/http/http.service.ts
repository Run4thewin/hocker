import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http : HttpClient) { }

  options!: {
    headers?: HttpHeaders | { [header: string]: string | string[] };
  }

  private apiURL = "https://us-east1-software-factory-295023.cloudfunctions.net/sendEmail";

  sendForm(form : any) : Observable<any>{

    const message = {
        "mailTo": "brendaluizacpereira@gmail.com",
        "message": form.nombre + form.email + form.telefono + form.mensaje
    }

    return this.http.post(this.apiURL, message, this.options);
    
  }

  //Cookies

  //Checking if cookies have been accepted before
  acceptedCookies() {
    //returns true if localStorage already has a cookieSeen item as "accepted"
    return localStorage.getItem("cookieSeen") == "accepted";
  }

  //Accepting cookies alert
  okCookies() {
    localStorage.setItem("cookieSeen", "accepted")
    return this.acceptedCookies();
  }
}


