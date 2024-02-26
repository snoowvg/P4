import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PetComponent } from './pet/pet.component';
import { TelapetComponent } from './pet/telapet/telapet.component';
import { TelaservicoComponent } from './pet/telaservico/telaservico.component';
import { TelaemitirnotaComponent } from './pet/telaemitirnota/telaemitirnota.component';
import { AddpetComponent } from './pet/telapet/addpet/addpet.component';
import { AddracaComponent } from './pet/telapet/addpet/addraca/addraca.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    TelapetComponent,
    TelaservicoComponent,
    TelaemitirnotaComponent,
    AddpetComponent,
    AddracaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
