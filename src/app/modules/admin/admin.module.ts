import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', component: AdminComponent}
];

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    routing
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
