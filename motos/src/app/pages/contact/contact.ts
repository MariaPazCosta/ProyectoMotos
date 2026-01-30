import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactoForm: FormGroup = new FormGroup({
    nombre: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),
    telefono: new FormControl("",Validators.required),
    mensaje: new FormControl("")
})

onSave(){
  const formValue = this.contactoForm.value
  alert(`Gracias ${formValue.nombre}, te estaremos contactando pronto`)
  this.contactoForm.reset()
}

}
