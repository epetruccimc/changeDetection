import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbueloComponent } from './abuelo/abuelo.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AbueloComponent, PadreComponent, HijoComponent],
  exports: [AbueloComponent, PadreComponent, HijoComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentModule { }
