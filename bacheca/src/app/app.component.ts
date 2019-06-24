import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bacheca, loginDati } from './bacheca';
import { bacheca2 } from './bacheca';
import { commenti } from './bacheca';
import { risposte } from './bacheca';
import { Utenti } from './mock-bacheca';
import { Dati } from './mock-bacheca';
import { CommentoUtente } from './mock-bacheca';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bacheca';
  myForm: FormGroup;
  myForm2: FormGroup;
  myForm3: FormGroup;

  vettUtenti: bacheca[] = Utenti;
  vettLogin: loginDati[] = Dati;
  vettCommenti: commenti[] = CommentoUtente;
  vettRisposte: risposte[];

  selected: bacheca;

  input: bacheca;
  input2: bacheca2;
  input3: commenti;
  input4: risposte;

  login: loginDati;
  mostraRegistrazione: Boolean = false;
  testo: string
  t: Boolean = false;
  y: number;
  indice: number;
  commentoUguale: Boolean = false;
  constructor(fb:FormBuilder){
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
    this.myForm3 = fb.group({
      'commento': ['', Validators.required],
      'risposta': ['', Validators.required]
    });
  }
  onSubmit(){
    if(!this.myForm.invalid){

      this.input = new bacheca();
      this.login = new loginDati();
          this.input.nome = this.myForm.controls['nome'].value;
          this.input.cognome = this.myForm.controls['cognome'].value;
          this.input.email = this.myForm.controls['email'].value;
          this.input.password = this.myForm.controls['password'].value;
          this.input.numeri = this.myForm.controls['numeri'].value;
          this.vettUtenti.push(this.input);
          this.login.nomeLogin = this.myForm.controls['nome'].value;
          this.login.cognomeLogin = this.myForm.controls['cognome'].value;
          this.vettLogin.push(this.login);


    }
  }
  onSubmit2(): number{
    let k = 0;
    if(!this.myForm2.invalid){

      this.input2 = new bacheca2();


          this.input2.email2 = this.myForm2.controls['email2'].value;
          this.input2.password2 = this.myForm2.controls['password2'].value;
          for(let i = 0; i < this.vettUtenti.length; i++){
            if(this.input2.email2 == this.vettUtenti[i].email){
              if(this.input2.password2 == this.vettUtenti[i].password){
                console.log("Ti sei loggato");
                this.vettLogin[k].nomeLogin = this.vettUtenti[i].nome;
                this.vettLogin[k].cognomeLogin = this.vettUtenti[i].cognome;
                console.log(this.vettLogin);
                this.t = true;

              }
            }
          }
          return k;






    }
  }
  onSubmit3(){
      this.input3 = new commenti();
      this.input3.commento = this.myForm3.controls['commento'].value;


      for(let i = 0; i < this.vettUtenti.length; i++){
            if(this.input2.email2 == this.vettUtenti[i].email){
              if(this.input2.password2 == this.vettUtenti[i].password){
                console.log("Ti sei loggato");

                this.input3.nome = this.vettLogin[i].nomeLogin;
                this.input3.cognome = this.vettLogin[i].cognomeLogin;
                this.vettCommenti.push(this.input3);

                this.t = true;
                console.log(this.vettCommenti);
                }
                for(let y = 0; y <this.vettCommenti.length - 1; y++){
                  for(let j = 1; j < this.vettCommenti.length; j++){

                      if(this.vettCommenti[y].commento == this.vettCommenti[j].commento){
                          this.commentoUguale = true;
                        }

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
  addRisposta(text: HTMLInputElement)
  {
    this.vettRisposte.push(new risposte(text.value,this.input.nome,this.input.cognome,this.t));

  }
  /*logout(){
    this.t = false;
    console.log("devi effettuare il login");
  }*/

}
