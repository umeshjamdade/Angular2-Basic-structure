import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService }        from './user.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ToasterModule } from 'angular2-toaster';
// import { ValidationService } from './validation.service';
// import { ControlMessagesComponent } from './control-messages.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ToasterModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
