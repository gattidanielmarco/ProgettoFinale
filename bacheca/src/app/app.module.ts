import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ElencoComponent } from './elenco/elenco.component';
import { RispostaComponent } from './risposta/risposta.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoComponent,
    RispostaComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
