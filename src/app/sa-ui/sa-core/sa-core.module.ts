import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaColorDirective } from './sa-color.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SaColorDirective],
  declarations: [SaColorDirective]
})
export class SaCoreModule { }
