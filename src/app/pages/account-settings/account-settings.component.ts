import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  private linkTheme = document.querySelector('#theme');
  private links: NodeListOf<Element> | null;

  constructor(private settingsService: SettingsService) {
    this.links = null;
  }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    const colorTheme = localStorage.getItem('theme') || '';
    this.switchTheme(colorTheme);
  }

  switchTheme(colorTheme: string) {
    this.settingsService.changeTheme(colorTheme, this.links);
  }
}
