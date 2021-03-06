import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'shop',
        loadChildren: () => import('../shop/shop.module').then((m) => m.ShopPageModule),
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then((m) => m.NewsPageModule),
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact.module').then((m) => m.ContactPageModule),
      },
      {
        path: '',
        redirectTo: '/home/shop',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
