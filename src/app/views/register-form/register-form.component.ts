import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Form } from '../form';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  /*Property contactForm has to be declared out of the constructor.
  If we put it inside the constructor, it generates the error TS2341. */

  contactForm! : FormGroup;

  telefono: any;

  sentMessage = false;

  constructor(private formBuilder : FormBuilder, private http : HttpService) { }

  ngOnInit(): void {
    this.createForm(new Form());
  }
  
  createForm(form: Form) {
    this.contactForm = this.formBuilder.group ({
      nombre: [form.nombre, [Validators.required]],
      email: [form.email, [Validators.email]],
      telefono: [form.telefono, [Validators.required]],
      mensaje: [form.mensaje]
    }) 
  };

  onSubmit() {
    
    this.http.sendForm(this.contactForm.value).subscribe((data)=>{
      console.log(data);
    });

    this.sentMessage = true;

    this.contactForm.reset(new Form());

  }
}

