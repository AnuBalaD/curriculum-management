import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{MainModule} from './modules/main.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
