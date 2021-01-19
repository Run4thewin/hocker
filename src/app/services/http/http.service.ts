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
}


