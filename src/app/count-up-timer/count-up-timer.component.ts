import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-up-timer',
  templateUrl: './count-up-timer.component.html',
  styleUrls: ['./count-up-timer.component.css']
})
export class CountUpTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ms: any = '0' + 0;
  sec: any = '0' + 0;
  min: any = '0' + 0;

  startTimer: any;
  running = false;

  start() {
    if (!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if (this.ms === 100) {
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec: this.sec;
          this.ms = '0' + 0;
        }
        if (this.sec === 60) {
          this.min++;
          this.min = this.min < 10 ? '0' + this.min: this.min;
          this.sec = '0' + 0;
        }
      }, 10);
    } else {
      this.stop();
    }
  }

  stop() {
    clearInterval(this.startTimer);
    this.running = false;
  }
}
