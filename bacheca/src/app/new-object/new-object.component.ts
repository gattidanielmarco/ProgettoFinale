import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bacheca, loginDati } from '../bacheca';
import { bacheca2 } from '../bacheca';
import { commenti } from '../bacheca';
import { risposte } from '../bacheca';
import { Utenti } from '../mock-bacheca';
import { Dati } from '../mock-bacheca';
import { CommentoUtente } from '../mock-bacheca';
import { Oggetto, oggetto1 } from './new-object';
import { Object } from './mock-new-object';
@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {
@Input() login: commenti[];
vettObject: Oggetto[] = Object;
myForm4: FormGroup;
inputOggetti: oggetto1;
utenteLoggato: bacheca;
  constructor(fb: FormBuilder) {
    this.myForm4 = fb.group({
      'descrizione': ['',Validators.required],
      'prezzo': ['',Validators.required],
      'link': ['',Validators.required]
    })
   }

  ngOnInit() {
  }
  onSubmitOggetti(){
    this.inputOggetti = new oggetto1();
    this.inputOggetti.descrizione = this.myForm4.controls['descrizione'].value;
    this.inputOggetti.prezzo = this.myForm4.controls['prezzo'].value;
    this.inputOggetti.link = this.myForm4.controls['link'].value;
    this.vettObject.push(new Oggetto(this.utenteLoggato.nome,this.utenteLoggato.cognome,new Array<oggetto1>()));
  }

}
