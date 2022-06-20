import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    PagesComponent,
    ProgressComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SharedModule],
})
export class PagesModule {}
