import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';


// import * as fromContainers from './containers';
// import * as fromComponents from './components';
// import * as fromServices from './services';

@NgModule({
  declarations: [/*...fromContainers.containers, ...fromComponents.components*/],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  providers: [/*...fromServices.services*/],
  exports: [/*...fromContainers.containers, ...fromComponents.components*/]
})
export class UserModule { }
