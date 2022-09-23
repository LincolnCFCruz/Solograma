import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Nonograma5x5Component } from './nonograma5x5/nonograma5x5.component';
import { Nonograma10x10Component } from './nonograma10x10/nonograma10x10.component';
import { Nonograma15x15Component } from './nonograma15x15/nonograma15x15.component';
import { NonogramaDesafioComponent } from './nonograma-desafio/nonograma-desafio.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GanhouComponent } from './ganhou/ganhou.component';
import { CountUpTimerComponent } from './count-up-timer/count-up-timer.component';
import { SquareComponent } from './square/square.component';
import { GanhouDesafioComponent } from './ganhou-desafio/ganhou-desafio.component';

@NgModule({
  declarations: [
    AppComponent,
    Nonograma5x5Component,
    Nonograma10x10Component,
    Nonograma15x15Component,
    NonogramaDesafioComponent,
    HeaderComponent,
    HomeComponent,
    GanhouComponent,
    CountUpTimerComponent,
    SquareComponent,
    GanhouDesafioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
