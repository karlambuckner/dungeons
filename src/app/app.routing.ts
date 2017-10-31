import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { FindComponent }   from './find/find.component';
import { AddComponent }   from './add/add.component';
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
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
