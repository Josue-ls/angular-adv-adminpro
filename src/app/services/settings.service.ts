import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');
  constructor() {
    this.getTheme();
  }

  getTheme() {
    let url = '';
    if (!!localStorage.getItem('theme')) {
      url = `'./assets/css/colors/${localStorage.getItem('theme')}.css'`;
    } else {
      url = './assets/css/colors/default-dark.css';
      localStorage.setItem('theme', 'default-dark');
    }
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string, links: NodeListOf<Element> | null) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', theme);

    this.selectColor(theme, links);
  }

  selectColor(theme: string, links: NodeListOf<Element> | null) {
    links?.forEach((element) => {
      element.classList.remove('working');
      const atb = element.getAttribute('data-theme');
      if (atb === (localStorage.getItem('theme') || theme))
        element.classList.add('working');
    });
  }
}
