import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Form } from '../form';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
  }

  onSubmit() {

    console.log(this.contactForm.value);

    this.contactForm.reset(new Form());
  }

}

