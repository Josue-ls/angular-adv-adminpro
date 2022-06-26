import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @Input('inValue') progressIn: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('outValue') progressOut: EventEmitter<number> = new EventEmitter();

  // Se pueden tener tantos inputs como sean necesarios
  // @Input() input1: string | number | boolean | array | object;

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

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

  onChange(value: number) {
    if (value >= 100) this.progressIn = 100;
    if (value <= 0) this.progressIn = 0;
    if (value >= 0 && value <= 100) this.progressIn = value;
    console.log(this.progressIn);
    this.progressOut.emit(this.progressIn);
  }

  isInvalidClass = () => this.progressIn > 100 || this.progressIn < 0;
}
