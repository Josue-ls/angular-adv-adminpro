import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  private linkTheme = document.querySelector('#theme');
  constructor() {}

  ngOnInit(): void {
    let url = '';
    if (!!localStorage.getItem('theme')) {
      url = `'./assets/css/colors/${localStorage.getItem('theme')}.css'`;
    } else {
      url = './assets/css/colors/default-dark.css';
      localStorage.setItem('theme', 'default-dark');
    }
    this.linkTheme?.setAttribute('href', url);
  }
}
