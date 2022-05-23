import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserBioDataComponent } from './pages/user-bio-data/user-bio-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from "primeng/messages";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { MessageModule } from "primeng/message";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {KeyFilterModule} from 'primeng/keyfilter';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserBioDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeyFilterModule,
    ReactiveFormsModule,
    MessagesModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    MessageModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
