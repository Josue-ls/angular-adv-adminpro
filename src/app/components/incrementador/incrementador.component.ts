import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent {
  @Input('progress-child') progress: number;

  // Se pueden tener tantos inputs como sean necesarios
  // @Input() input1: string | number | boolean | array |

  constructor() {
    this.progress = 50;
  }

  // get getProgress() {
  //   return `${this.progress}%`;
  // }

  changeValue(value: number): void {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress += value;
  }
}
