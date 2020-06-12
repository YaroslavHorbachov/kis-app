import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent, SignInComponent } from './pages';

const routers: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
