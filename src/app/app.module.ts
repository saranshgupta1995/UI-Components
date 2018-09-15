import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SexyButtonComponent } from './sexy-button/sexy-button.component';
import { BigFatTextComponent } from './big-fat-text/big-fat-text.component';
import { TextBreakerDirective } from './directives/text-breaker.directive';
import { BrokenTextComponent } from './broken-text/broken-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SexyButtonComponent,
    BigFatTextComponent,
    TextBreakerDirective,
    BrokenTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
