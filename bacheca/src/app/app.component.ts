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
  vettUtenti: bacheca[];
  input: bacheca;
  mostraRegistrazione: Boolean;
  testo: string;
  constructor(fb:FormBuilder){
    this.vettUtenti=new Array();
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
      
      this.input = new bacheca();

 
      for(let i = 0; i < this.vettUtenti.length + 1;i++)
      this.input.nome = this.myForm.controls['nome'].value;
      this.input.cognome = this.myForm.controls['cognome'].value;
      this.input.email = this.myForm.controls['email'].value;
      this.input.password = this.myForm.controls['password'].value;
      this.input.numeri = this.myForm.controls['numeri'].value;
    
      this.vettUtenti.push(this.input);
      
    }
  }
  hiddenButton(): Boolean{
    this.mostraRegistrazione = !this.mostraRegistrazione;
    if(this.mostraRegistrazione){
      this.testo = "Nascondi form";
    }
    else{
      this.testo = "Mostra form";
    }
    return false;
  }
}
