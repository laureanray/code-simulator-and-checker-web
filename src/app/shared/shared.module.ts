import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from '@app/shared/not-found/not-found.component';
import {LoadingComponent} from '@app/shared/loading/loading.component';



@NgModule({
  declarations: [NotFoundComponent, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [NotFoundComponent, LoadingComponent]
})
export class SharedModule { }
