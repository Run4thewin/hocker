import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  displayServicesList = true; 

  constructor() { }

  ngOnInit(): void {
  }
  
  hideServicesList() {
    this.displayServicesList = !this.displayServicesList;
  }
}

