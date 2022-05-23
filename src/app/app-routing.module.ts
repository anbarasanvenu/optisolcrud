import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBioDataComponent } from './pages/user-bio-data/user-bio-data.component';

const routes: Routes = [
  {
    path: '',
    component: UserBioDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
