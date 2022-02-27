import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipentryPageRoutingModule } from './tipentry-routing.module';

import { TipentryPage } from './tipentry.page';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipentryPageRoutingModule,
    SharedModule
  ],
  declarations: [TipentryPage]
})
export class TipentryPageModule {}
