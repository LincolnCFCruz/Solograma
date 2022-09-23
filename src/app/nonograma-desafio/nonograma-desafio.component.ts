import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nonograma-desafio',
  templateUrl: './nonograma-desafio.component.html',
  styleUrls: ['./nonograma-desafio.component.css']
})
export class NonogramaDesafioComponent implements OnInit {
  squares: number[];
  upperHeaderValues: number[]
  leftHeaderValues: number[]
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
     [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,
      1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,
      0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,
      0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,
      0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,
      0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,
      0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,
      0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,
      0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,
      0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
      0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,
      0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,
      0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,
      0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,
      0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,
      0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,
      0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,
      0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,
      0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,
    ]
    this.upperHeaderValues = 
    [ 
      0,0,9,9,8,6,5,0,0,1,0,0 ,0 ,0 ,0 ,0,0 ,0,0 ,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,7,1,1,1,1,1,5,5,3,0,2 ,0 ,0 ,0 ,0,0 ,0,0 ,0,0,0,0,0,0,0,0,0,0,0,0,0,
      4,1,1,1,1,1,1,1,1,1,5,1 ,0 ,5 ,0 ,4,0 ,3,0 ,2,0,1,0,0,0,0,0,1,1,0,0,0,
      1,1,1,1,1,1,1,1,1,4,6,12,17,10,16,9,13,7,11,6,8,4,5,5,5,5,5,3,3,3,3,1,
    ]
    this.leftHeaderValues = [
      0,0,0,0,0,0 ,8,0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,
      0,0,0,0,0,0 ,1,0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,
      0,0,0,0,0,0 ,1,0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,
      0,0,0,0,0,0 ,1,0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,
      0,0,0,0,0,0 ,1,0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,
      0,0,0,0,0,0 ,1,0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,
      0,0,0,0,0,0 ,1,0 ,0 ,0 ,0 ,0 ,0,0,0,0,0,0,0,
      0,4,5,5,5,0 ,5,0 ,0 ,0 ,0 ,8 ,0,0,7,0,0,0,7,
      3,4,6,7,9,28,2,30,29,26,11,10,9,9,7,7,6,4,4,
  
    ]
    this.countError = 0;
    this.countPassTotal = 575+(2*this.countError);
    this.countPassUser = 0;
  }

  verify(idx: number) {
    if (this.squares[idx] == 1) {
      this.countPassUser ++; 
    }
    else{
      window.alert("ERROU! Desmarque a célula!");
      this.countError ++;
    }
    this.calculateWinner()
  }

  calculateWinner(){
    if (this.countPassUser == this.countPassTotal){
      this._router.navigate(['/ganhou'])
      }

    if (this.countError > 100){
      if (confirm("Você perdeu, deseja reiniciar?"))
        this.newGame()
      else{
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
