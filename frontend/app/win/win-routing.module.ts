import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WinPage } from './win.page';

const routes: Routes = [
  {
    path: '',
    component: WinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinPageRoutingModule {}
