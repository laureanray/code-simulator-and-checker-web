import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from '@app/shared/not-found/not-found.component';
import {LoadingComponent} from '@app/shared/loading/loading.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {SidenavComponent} from '@app/shared/sidenav/sidenav.component';



@NgModule({
  declarations: [NotFoundComponent, LoadingComponent, ForbiddenComponent, SidenavComponent],
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponent, LoadingComponent, SidenavComponent]
})
export class SharedModule { }
