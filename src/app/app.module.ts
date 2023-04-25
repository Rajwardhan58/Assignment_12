import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailureDirective } from './comp-failure.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompStyleDirective } from './comp-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSuccessDirective,
    CompFailureDirective,
    CompStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
