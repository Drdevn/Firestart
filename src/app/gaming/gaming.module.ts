import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GamingRoutingModule } from './gaming-routing.module';
import { PlayToDrinkComponent } from './play-to-drink/play-to-drink.component';

const routes: Routes =[
  { path: "gameOne", component: PlayToDrinkComponent }
]

@NgModule({
  imports: [
    CommonModule,
    GamingRoutingModule
  ],
  declarations: [PlayToDrinkComponent,
  ],
  exports: [PlayToDrinkComponent,
  ]
})
export class GamingModule { }
