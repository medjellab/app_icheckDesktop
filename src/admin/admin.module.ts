import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';


import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import { VehiculeRoutingModule } from './modules/vehicule/vehicule-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';
import { MaterialModule } from 'src/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    VehiculeRoutingModule,
    UserRoutingModule
  ],
  providers: [...fromServices.services],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class AdminModule { }
