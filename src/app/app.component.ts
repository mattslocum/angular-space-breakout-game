import { Component } from '@angular/core';
import {Breakout} from './breakout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-space-breakout-game';
  amount = 20;
  blocks: void[];
  isPlaying = false;

  play() {
    this.isPlaying = true;
    this.blocks = Array(this.amount);
    setTimeout(() => {
      // sorry, not angular. This was originally an easter egg, so it doesn't use angular itself.
      new Breakout('.block', () => {
        this.isPlaying = false;
      });
    }, 0);
  }
}
