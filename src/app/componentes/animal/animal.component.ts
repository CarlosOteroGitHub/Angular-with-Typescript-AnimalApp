import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalesService } from '../../servicios/animales.service'

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animal: any = {};

  constructor(private activateRoute: ActivatedRoute, private _animalService: AnimalesService) {
    this.activateRoute.params.subscribe(params => {
      this.animal = this._animalService.getAnimal(params['id']);
      console.log(this.animal);
    })
  }

  ngOnInit(): void { }
}