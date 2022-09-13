import { Component, Input } from '@angular/core';
import { Nonograma5x5Component } from '../nonograma5x5/nonograma5x5.component'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})

export class SquareComponent  {
  toggle = true;

  enableDisableRule() {
      this.toggle = !this.toggle;
  }
}