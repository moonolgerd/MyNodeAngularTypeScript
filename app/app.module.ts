import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { VillainDetailComponent } from './villain-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    VillainDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
