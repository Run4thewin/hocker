import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Form } from '../form';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  /*Property contactForm has to be declared out of the constructor so that it
  is accessible to the RegisterForm component (this).
  If we put it inside the constructor, it generates the error error TS2341. */

  contactForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
  this.createForm(new Form());
  }
  
  createForm(form: Form) {
    this.contactForm = this.formBuilder.group ({
      nombre: [form.nombre, [Validators.required]],
      email: [form.email, [Validators.email]],
      //telefono: [form.telefono, [Validators.required]],
      mensaje: [form.mensaje]
    }) 
  };

  onSubmit() {

    //console.log(this.contactForm.value);
    //var data = { nombre : form.nombre};
  
    this.http.post(`$`, this.contactForm)
    .subscribe (
      resultado => {
        console.log(resultado)
      }
    );
    
    this.contactForm.reset(new Form());
  }

}

