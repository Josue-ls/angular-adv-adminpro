import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  sendItData = {
    labels: ['Develop', 'Networkin', 'DBA'],
    datasets: [{ data: [200, 500, 70] }],
  };
  sendSaleData = {
    labels: ['Develop', 'Networkin', 'DBA'],
    datasets: [{ data: [500, 300, 120] }],
  };
}
