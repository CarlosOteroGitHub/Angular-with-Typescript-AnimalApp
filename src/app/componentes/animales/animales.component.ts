import { Component, OnInit } from '@angular/core';
import { AnimalesService, AnimalInterface } from '../../servicios/animales.service'

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animalesArray: AnimalInterface[] = [];

  constructor(private _animalesService: AnimalesService) { }

  ngOnInit(): void {
    this.animalesArray = this._animalesService.getAnimales();
    console.log(this.animalesArray);
  }
}