import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/',
        },
        {
          title: 'Progress',
          url: 'progress',
        },
        {
          title: 'Graficas',
          url: 'grafica1',
        },
      ],
    },
  ];

  getMenu() {
    return [...this.menu];
  }

  constructor() {}
}
