import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { TimeTableComponent } from './time-table/time-table.component';

const routes: Routes = [
  {path: 'subject/details/add', component: SubjectDetailsComponent},
  {path: 'subject/details/show', component: TimeTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
