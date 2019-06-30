import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bacheca, loginDati } from '../bacheca';
import { bacheca2 } from '../bacheca';
import { commenti } from '../bacheca';
import { risposte } from '../bacheca';
import { Utenti } from '../mock-bacheca';
import { Dati } from '../mock-bacheca';
import { CommentoUtente } from '../mock-bacheca';
import { Oggetto, oggetto1 } from '../new-object/new-object';
import { Object } from '../new-object/mock-new-object';
@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.css']
})
export class ObjectsListComponent implements OnInit {
@Input() ogg: Oggetto[] = Object;
  constructor() { }

  ngOnInit() {
  }

}
