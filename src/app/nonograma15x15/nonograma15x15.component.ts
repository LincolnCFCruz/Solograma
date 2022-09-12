import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nonograma15x15',
  templateUrl: './nonograma15x15.component.html',
  styleUrls: ['./nonograma15x15.component.css']
})
export class Nonograma15x15Component implements OnInit {
  squares: number[];
  xIsNext: boolean;
  countError: number;
  countPassUser: number;
  countPassTotal: number;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame() {
    this.squares = 
     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,
      0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,
      0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,
      0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,
      0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,
      0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,
      0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,
      0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,
      0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,
      0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    this.countError = 0;
    this.countPassTotal = 6;
    this.countPassUser = 0;
  }

  verify(idx: number) {
    if (this.squares[idx] == 1) {
      this.countPassUser ++; 
    }
    else{
      window.alert("ERROU!");
      this.countError ++;
    }
    this.calculateWinner()
  }

  calculateWinner(){
    if (this.countPassUser == this.countPassTotal){
      this._router.navigate(['/ganhou'])
      }

    if (this.countError >= 3){
      if (confirm("Você perdeu, deseja reiniciar?"))
        this.newGame()
      else{
        this._router.navigate(['/']);
      }
    }
  }
}