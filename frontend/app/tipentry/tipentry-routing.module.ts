import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipentryPage } from './tipentry.page';

const routes: Routes = [
  {
    path: '',
    component: TipentryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipentryPageRoutingModule {}
