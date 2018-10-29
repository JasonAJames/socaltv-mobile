import { ModuleWithProviders } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';

import { SocaltelevisionComponent } from './tv/socaltelevision/socaltelevision.component';

export const router: Routes = [
      { path: 'socaltelevision', component: SocaltelevisionComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: SocaltelevisionComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {useHash: true});