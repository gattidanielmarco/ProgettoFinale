import { Component, OnInit, Input } from '@angular/core';
import { bacheca, loginDati } from '../bacheca';
import { Oggetto } from './new-object';
import { Object } from './mock-new-object';
@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {
@Input() login: loginDati[];
vettObject: Oggetto[] = Object;
  constructor() { }

  ngOnInit() {
  }

}
