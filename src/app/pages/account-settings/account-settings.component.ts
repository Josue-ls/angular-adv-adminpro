import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  private linkTheme = document.querySelector('#theme');
  private links: NodeListOf<Element> | null;

  constructor() {
    this.links = null;
  }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    const colorTheme = localStorage.getItem('theme') || '';
    this.changeTheme(colorTheme);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', theme);

    this.selectColor(theme);
  }

  selectColor(theme: string) {
    this.links?.forEach((element) => {
      element.classList.remove('working');
      const atb = element.getAttribute('data-theme');
      if (atb === (localStorage.getItem('theme') || theme))
        element.classList.add('working');
    });
  }
}
