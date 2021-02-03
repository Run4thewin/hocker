import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { HttpService } from './services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'SitioHocker';

  //closeCookiesAlert calls okCookies, that sets an item CookiesSeen
  //as "accepted" in Local Storage. Another function, acceptedCookies, returns boolean
  //value for local storage item CookiesSeen. ShowCookiesAlert will always check for it
  //and return the opposite. So, if cookies were accepted, showCookiesAlert will be negative.

  showCookiesAlert = true;

  constructor(private trackCookies : HttpService) { }

  //Deciding whether to display cookies alert
  
  //Saving acceptance of cookies
  closeCookiesAlert() {
    this.trackCookies.okCookies();
    this.showCookiesAlert = false;
  }

}
