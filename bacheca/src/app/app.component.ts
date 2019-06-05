import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bacheca } from './bacheca';
import { bacheca2 } from './bacheca';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bacheca';
  myForm: FormGroup;
  myForm2: FormGroup;
  vettUtenti: bacheca[];
  input: bacheca;
  input2: bacheca2;
  mostraRegistrazione: Boolean = false;
  testo: string;
  t: Boolean = false;
  y: number;
  constructor(fb:FormBuilder){
    this.vettUtenti=new Array();
    this.myForm = fb.group({
      'nome': ['',Validators.required],
      'cognome': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'password': ['',Validators.required],
      'numeri': ['',Validators.required]
      
    });
    this.myForm2 = fb.group({
      'email2': ['',[Validators.required, Validators.email]],
      'password2': ['',Validators.required]
    });
  }
  onSubmit(){
    if(!this.myForm.invalid){
      
      this.input = new bacheca();

 
      this.y = 1;
      if(this.t == false){
        for(let i = 0; i < this.vettUtenti.length; i++){
          if(this.vettUtenti[this.y] == this.vettUtenti[i]){
          this.input.nome = this.myForm.controls['nome'].value;
          this.input.cognome = this.myForm.controls['cognome'].value;
          this.input.email = this.myForm.controls['email'].value;
          this.input.password = this.myForm.controls['password'].value;
          this.input.numeri = this.myForm.controls['numeri'].value;
          this.vettUtenti.push(this.input);
          this.t = true;
          this.y++;
          }
        }
        
      }
    }
  }
  onSubmit2(){
    if(!this.myForm2.invalid){
      
      this.input = new bacheca();

 
      this.y = 1;
      if(this.t == false){
        
          this.input2.email2 = this.myForm.controls['email2'].value;
          this.input2.password2 = this.myForm.controls['password2'].value;
          this.t = true;
          this.y++;
          
          if(this.input.email == this.input2.email2 ){
            if(this.input.password == this.input2.email2){
              console.log("Ti sei loggato");
            }
          }
          
        
        
      }
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
