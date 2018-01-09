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
import { MatButtonModule, MatCheckboxModule, MatSlideToggleModule } from '@angular/material'
import { RouterModule } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'
import { VillainsComponent } from './villains/villains.component'
import { ContactComponent } from './contact/contact.component'
import { AdminComponent } from './admin/admin.component'
import { AuthGuard } from 'app/auth-guard.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'heroes', component: HeroesComponent },
            { path: 'villains', component: VillainsComponent },
            { path: 'countdown-timer', component: CountdownTimerComponent },
            { path: 'contact', component: ContactComponent, outlet: 'popup' },
            { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        VillainDetailComponent,
        CountdownTimerComponent,
        HeroesComponent,
        VillainsComponent,
        ContactComponent,
        AdminComponent
    ],
    providers: [
        HeroService,
        VillainService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
