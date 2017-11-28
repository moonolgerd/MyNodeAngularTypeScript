import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component'
import { VillainDetailComponent } from './villain-detail/villain-detail.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroService } from './hero.service'
import { VillainService } from './villain.service'
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component'
import {MatButtonModule, MatCheckboxModule, MatSlideToggleModule} from '@angular/material'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    VillainDetailComponent,
    CountdownTimerComponent
],
  providers: [
    HeroService,
    VillainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
