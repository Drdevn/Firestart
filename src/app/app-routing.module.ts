import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: 'gameOne',
    loadChildren: './gaming/gaming.module#GamingModule'},
    { path: 'statics',
     loadChildren: './static/static.module#StaticModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
