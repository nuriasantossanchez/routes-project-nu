import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { ErrorComponent } from './error/error.component';

// const routes: Routes = [];

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch:'full' },
   { path: 'home', component: HomeComponent },
   { path: 'hello/:name', component: HelloComponent },
   { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
