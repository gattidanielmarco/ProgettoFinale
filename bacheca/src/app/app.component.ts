import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bacheca } from './bacheca';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bacheca';
  myForm: FormGroup;
  input: bacheca;
  constructor(fb:FormBuilder){
    this.myForm = fb.group({
      'nome': ['',Validators.required],
      'cognome': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'password': ['',Validators.required],
      'numeri': ['',Validators.required]
      
    });
  }
  onSubmit(){
    if(!this.myForm.invalid){
      let x = this.myForm.controls['nome'].value + this.myForm.controls['cognome'].value + this.myForm.controls['email'].value + this.myForm.controls['password'].value + this.myForm.controls['numeri'].value;
      
    }
  }
}
