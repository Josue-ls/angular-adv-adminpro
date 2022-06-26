import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  progress1: number = 25;
  progress2: number = 55;

  get getProgress1() {
    return `${this.progress1}%`;
  }

  get getProgress2() {
    return `${this.progress2}%`;
  }

  setProgress1 = (value: number) => {
    this.progress1 = value;
  };

  setProgress2 = (value: number) => {
    this.progress2 = value;
  };
}
