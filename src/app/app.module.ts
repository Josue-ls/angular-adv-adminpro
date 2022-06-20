import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// Se encarga de las directivas como: ngIf, ngFor, etc...

// Modules
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';

// Components
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [AppComponent, NopagefoundComponent],
  imports: [BrowserModule, CommonModule, RouterModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
