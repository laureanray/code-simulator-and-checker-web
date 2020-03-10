import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoadingComponent} from './loading/loading.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [NotFoundComponent, LoadingComponent, ForbiddenComponent, SidenavComponent, LogoutModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [NotFoundComponent, LoadingComponent, SidenavComponent]
})
export class SharedModule { }
