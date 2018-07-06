import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamingModule } from '../gaming/gaming.module'
import { StaticRoutingModule } from './static-routing.module';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'statics', component: HeaderComponent },
  { path: '**', component: ErrorPageComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GamingModule,
  ],
  declarations: [HeaderComponent,
     FooterComponent,
     ErrorPageComponent,],

  exports: [HeaderComponent,
     FooterComponent,
  ]
})

export class StaticModule { }
