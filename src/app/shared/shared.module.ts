import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoadingComponent} from './loading/loading.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [NotFoundComponent, LoadingComponent, ForbiddenComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [NotFoundComponent, LoadingComponent, SidenavComponent]
})
export class SharedModule { }
