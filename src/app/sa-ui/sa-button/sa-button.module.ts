import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaButton } from './sa-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SaButton],
  declarations: [SaButton]
})
export class SaButtonModule { }
