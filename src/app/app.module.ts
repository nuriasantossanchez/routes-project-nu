import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: ' ', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hello/:name', component: HelloComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [AppComponent, ErrorComponent, HelloComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
