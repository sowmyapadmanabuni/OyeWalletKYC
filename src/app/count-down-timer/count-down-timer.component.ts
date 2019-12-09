import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  // @Input() counter;
  // @Output() stop=new EventEmitter();
  // @Output() start=new EventEmitter();
  // @Output() pause=new EventEmitter();

  intervalId = 0;
  message = '';
  seconds = 11;

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit() { this.start(); }
  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }

  // startCountdown(seconds){
  //   let counter = seconds;

  //   let interval = setInterval(() => {
  //     console.log(counter);
  //     counter--;
  //     if(counter < 0 ){

  //       // The code here will run when
  //       // the timer has reached zero.

  //       clearInterval(interval);
  //       console.log('Ding!');
  //     };
  //   }, 1000);
  // };

}
