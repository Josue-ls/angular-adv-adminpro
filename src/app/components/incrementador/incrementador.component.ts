import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent {
  @Input('inValue') progressIn: number = 50;
  @Output('outValue') progressOut: EventEmitter<number> = new EventEmitter();

  // Se pueden tener tantos inputs como sean necesarios
  // @Input() input1: string | number | boolean | array | object;

  changeValue(value: number): void {
    if (this.progressIn >= 100 && value > 0) {
      this.progressIn = 100;
      this.progressOut.emit(100);
      return;
    }
    if (this.progressIn <= 0 && value < 0) {
      this.progressIn = 0;
      this.progressOut.emit(0);
      return;
    }
    this.progressIn += value;
    this.progressOut.emit(this.progressIn);
  }
}
