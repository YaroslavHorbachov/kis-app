import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SingInGuard } from './auth/guards';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [SingInGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfilePageModule),
    canActivate: [SingInGuard],
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then((m) => m.SignInPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: '**',
    redirectTo: 'sign-in',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
