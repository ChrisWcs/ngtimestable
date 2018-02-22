import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimestableComponent } from './timestable/timestable.component';
import { MultipliComponent } from './multipli/multipli.component';
import { SingleStateService } from './single-state.service';


@NgModule({
  declarations: [
    AppComponent,
    TimestableComponent,
    MultipliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SingleStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
