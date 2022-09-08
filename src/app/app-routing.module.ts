import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountUpTimerComponent } from './count-up-timer/count-up-timer.component';
import { GanhouComponent } from './ganhou/ganhou.component';
import { HomeComponent } from './home/home.component';
import { NonogramaDesafioComponent } from './nonograma-desafio/nonograma-desafio.component';
import { Nonograma10x10Component } from './nonograma10x10/nonograma10x10.component';
import { Nonograma15x15Component } from './nonograma15x15/nonograma15x15.component';
import { Nonograma5x5Component } from './nonograma5x5/nonograma5x5.component';

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path: '5x5', component:Nonograma5x5Component},
  {path: '10x10', component:Nonograma10x10Component},
  {path: '15x15', component:Nonograma15x15Component},
  {path: 'desafio', component:NonogramaDesafioComponent},
  {path: 'ganhou', component: GanhouComponent},
  {path: 'timer', component: CountUpTimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
