import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoadingComponent} from './loading/loading.component';
import {SidenavComponent} from './sidenav/sidenav.component';



@NgModule({
  declarations: [NotFoundComponent, LoadingComponent, ForbiddenComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NotFoundComponent, LoadingComponent, SidenavComponent]
})
export class SharedModule { }
