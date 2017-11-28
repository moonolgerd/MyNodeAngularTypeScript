import { Component, OnInit, OnDestroy } from '@angular/core'

@Component({
    selector: 'app-countdown-timer',
    templateUrl: './countdown-timer.component.html',
    styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
    intervalId = 0
    message = 'Think about it'
    seconds = 100

    value = 0

    private clearTimer() {
        this.value = 0
        clearInterval(this.intervalId)
    }
    ngOnInit() { this.start() }
    ngOnDestroy() { this.clearTimer() }

    start() { this.countDown() }

    stop() { this.clearTimer() }

    private countDown() {
        this.clearTimer()
        this.intervalId = window.setInterval(() => {
            if (this.value <= 100) {
                this.value++
            }
        }, 1000)
    }
}
