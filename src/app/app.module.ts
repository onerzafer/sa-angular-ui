import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  SaCoreModule,
  SaButtonModule,
} from './sa-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SaCoreModule,
    SaButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
