import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nonograma5x5',
  templateUrl: './nonograma5x5.component.html',
  styleUrls: ['./nonograma5x5.component.css']
})

export class Nonograma5x5Component implements OnInit {
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
    this.squares = [0,0,1,0,0,
                    0,1,1,0,1,
                    1,1,1,1,1,
                    0,1,1,0,1,
                    0,0,1,0,0]
    
    this.upperHeaderValues = [
      0,2,0,2,0,
      1,1,5,1,1]

    this.leftHeaderValues = [
      1,3,5,1,3
    ]

    this.squaresPassed = [];
    this.countError = 0;
    this.countPassTotal = 13;
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

    if (this.countError > 5){
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
