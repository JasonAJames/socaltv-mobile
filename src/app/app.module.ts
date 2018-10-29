import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { SocaltelevisionComponent } from './tv/socaltelevision/socaltelevision.component';

@NgModule({
  declarations: [
    AppComponent,
    SocaltelevisionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'socaltelevision', component: SocaltelevisionComponent},
      { path: '', redirectTo: '/socaltelevision', pathMatch: 'full'},
      { path: '**', component: SocaltelevisionComponent }
    ], {useHash : true}),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
