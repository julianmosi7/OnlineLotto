import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrawsPageRoutingModule } from './draws-routing.module';

import { DrawsPage } from './draws.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrawsPageRoutingModule,
    SharedModule
  ],
  declarations: [DrawsPage]
})
export class DrawsPageModule {}
