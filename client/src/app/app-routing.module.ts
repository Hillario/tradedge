import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddtradeComponent } from './addtrade/addtrade.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'addtrade', component: AddtradeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
