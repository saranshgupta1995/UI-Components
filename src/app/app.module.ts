import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SexyButtonComponent } from './sexy-button/sexy-button.component';
import { BigFatTextComponent } from './big-fat-text/big-fat-text.component';
import { TextBreakerDirective } from './directives/text-breaker.directive';

@NgModule({
  declarations: [
    AppComponent,
    SexyButtonComponent,
    BigFatTextComponent,
    TextBreakerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
