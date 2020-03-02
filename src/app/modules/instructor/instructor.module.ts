import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorComponent } from './components/instructor/instructor.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: InstructorComponent}
];

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [InstructorComponent],
  imports: [
    CommonModule,
    routing
  ]
})

export class InstructorModule { }
