import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterComponent } from './monster/monster.component';


const routes: Routes = [
  {path: 'monster', component: MonsterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
