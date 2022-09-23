import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nonograma15x15',
  templateUrl: './nonograma15x15.component.html',
  styleUrls: ['./nonograma15x15.component.css']
})

export class Nonograma15x15Component implements OnInit {
  squares: number[];
  upperHeaderValues: number[]
  leftHeaderValues: number[]
  countError: number;
  countPassUser: number;
  countPassTotal: number;
  squaresPassed: number[];

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame() {
    this.squares = 
     [0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,
      0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,
      0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,
      0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,
      0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,
      0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,
      0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,
      0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,
      0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,
      0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,
      0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,
      0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,
      0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,
      0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,1,0,0,0,0,0,1]

    this.upperHeaderValues = 
    [ 0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,
      0,0,0,0,0,1,0,0,0,0,4,1,1,0,0,
      0,0,0,4,7,4,0,1,2,3,1,2,1,0,1,
      1,0,3,2,2,2,4,2,1,2,2,2,1,0,1,
      1,8,1,1,1,1,1,4,4,1,1,1,1,8,1]
    this.leftHeaderValues = [
      0,0,0,0,0,0,0,0,0 ,0,0,1,0,0,0,
      0,0,0,0,0,0,5,7,0 ,0,1,3,0,1,0,
      0,0,0,0,0,0,1,1,0 ,0,3,2,1,1,0,
      0,0,0,2,1,0,1,1,0 ,1,2,2,2,2,0,
      1,2,1,2,2,9,1,1,15,1,1,1,1,1,15]

    this.squaresPassed = [];
    this.countError = 0;
    this.countPassTotal = 94;
    this.countPassUser = 0;
  }

  verify(idx: number) {
    if (this.squares[idx] == 1) {
      if(!this.squaresPassed.includes(idx)){
        this.squaresPassed.push(idx);
        this.countPassUser++;
      }
      else {
        var index = this.squaresPassed.indexOf(idx);
        if (index !== -1) {
          this.squaresPassed.splice(index, 1);
        }
        this.countPassUser--;
      }
    }

    else{
      if(!this.squaresPassed.includes(idx)){
        window.alert("ERROU! Desmarque a célula!");
        this.squaresPassed.push(idx);
        this.countError++;
      }
      else {
        var index = this.squaresPassed.indexOf(idx);
        if (index !== -1) {
          this.squaresPassed.splice(index, 1);
        }
        this.countError--;
      }
    }

    this.calculateWinner()
  }

  calculateWinner(){   
    if (this.countError == 0){
      if (this.countPassUser == this.countPassTotal){
        this._router.navigate(['/ganhou'])
      }
    }

    if (this.countError > 15){
      if (confirm("Você perdeu, deseja reiniciar?")){
        this.newGame()
        window.location.reload()
      }else{
        this._router.navigate(['/']);
      }
    }
  }

  printUpperHeaderValues(idx: number){
    if(this.upperHeaderValues[idx] != 0){
      return this.upperHeaderValues[idx];
    }else{
      return null;
    }
  }

  printLeftHeaderValues(idx: number){
    if(this.leftHeaderValues[idx] != 0){
      return this.leftHeaderValues[idx];
    }else{
      return null;
    }
  }
}
