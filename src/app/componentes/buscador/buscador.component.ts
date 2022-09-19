import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalesService } from '../../servicios/animales.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  texto: string;
  animalesArray: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _animalService: AnimalesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.texto = params['texto'];
      console.log(this.texto);
      this.animalesArray = this._animalService.buscarAnimales(params['texto']);
      console.log(this.animalesArray);
    })
  }
}