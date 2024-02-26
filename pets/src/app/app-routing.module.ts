import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelapetComponent } from './pet/telapet/telapet.component';
import { TelaservicoComponent } from './pet/telaservico/telaservico.component';
import { TelaemitirnotaComponent } from './pet/telaemitirnota/telaemitirnota.component';
import { PetComponent } from './pet/pet.component';
import { AddpetComponent } from './pet/telapet/addpet/addpet.component';
import { AddracaComponent } from './pet/telapet/addpet/addraca/addraca.component';

const routes: Routes = [
  { path: '', component: PetComponent },
  { path: 'telapet', component: TelapetComponent },
  { path: 'telaservico', component: TelaservicoComponent },
  { path: 'telapet/addpet', component: AddpetComponent },
  { path: 'telaemitirnota', component: TelaemitirnotaComponent },
  { path: 'telapet/addpet/addraca', component: AddracaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
