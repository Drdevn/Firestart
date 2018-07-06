import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'statics', component: HeaderComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HeaderComponent]
})
export class StaticModule { }
