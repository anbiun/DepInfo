import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncComponent } from './enc-component/enc.component';
import { DecComponent } from './dec-component/dec.component';
import { AppComponent } from './app-component/app.component';

const routes: Routes = [
  { path: '',component: AppComponent},
  { path: 'enc', component: EncComponent },
  { path: 'dec', component: DecComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
