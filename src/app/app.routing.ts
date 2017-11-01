import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { FindComponent }   from './find/find.component';
import { AddComponent }   from './add/add.component';
import { GameDetailComponent }   from './game-detail/game-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
   path: 'games/:id',
   component: GameDetailComponent
 },
 {
    path: 'admin',
    component: AdminComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
