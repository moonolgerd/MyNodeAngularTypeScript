import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { VillainDetailComponent } from './villain-detail.component';
import { HeroService } from './hero.service';
import { VillainService } from './villain.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    VillainDetailComponent
  ],
  providers: [
    HeroService,
    VillainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
