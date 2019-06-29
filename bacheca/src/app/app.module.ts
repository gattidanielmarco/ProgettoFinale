import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ElencoComponent } from './elenco/elenco.component';
import { NewObjectComponent } from './new-object/new-object.component';
import { NewPostComponent } from './new-post/new-post.component';
import { UserObjectsComponent } from './user-objects/user-objects.component';
import { ObjectsListComponent } from './objects-list/objects-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ElencoComponent,
    NewObjectComponent,
    NewPostComponent,
    UserObjectsComponent,
    ObjectsListComponent,

  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
