import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bacheca, loginDati } from '../bacheca';
import { bacheca2 } from '../bacheca';
import { commenti } from '../bacheca';
import { risposte } from '../bacheca';
import { Utenti } from '../mock-bacheca';
import { Dati } from '../mock-bacheca';
import { CommentoUtente } from '../mock-bacheca';
@Component({
  selector: 'app-risposta',
  templateUrl: './risposta.component.html',
  styleUrls: ['./risposta.component.css']
})
export class RispostaComponent implements OnInit {
@Input() vC: commenti[] = CommentoUtente;
  constructor() { }

  ngOnInit() {
  }

}
