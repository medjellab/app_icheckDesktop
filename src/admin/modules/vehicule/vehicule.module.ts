import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculeRoutingModule } from './vehicule-routing.module';


/*import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';*/

@NgModule({
  declarations: [/*...fromContainers.containers, ...fromComponents.components*/],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
  ],
  providers: [/*...fromServices.services*/],
  exports: [/*...fromContainers.containers, ...fromComponents.components*/]
})
export class VehiculeModule { }
