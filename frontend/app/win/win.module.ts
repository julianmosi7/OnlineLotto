import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WinPageRoutingModule } from './win-routing.module';

import { WinPage } from './win.page';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WinPageRoutingModule,
    SharedModule
  ],
  declarations: [WinPage]
})
export class WinPageModule {}
