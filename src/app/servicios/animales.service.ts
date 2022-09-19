import { Injectable } from "@angular/core";

@Injectable()
export class AnimalesService {

    //Lista de datos del tipo "AnimalInterface" con la información de los animales.
    private animales: AnimalInterface[] = [
        {
            nombre: "Aguila",
            descripcion: "Como todas las aves de presa, las águilas poseen un pico grande, poderoso y puntiagudo para desprender la carne de su presa. Cuentan también con tarsos y garras poderosas.",
            img: "assets/img/aguila.jpg",
        },
        {
            nombre: "Cocodrilo",
            descripcion: "Es un reptil grande, su cuerpo es robusto, alargado y cola fuerte. La cabeza es ancha y aplanada con fuertes mandíbulas dentadas.",
            img: "assets/img/cocodrilo.png",
        },
        {
            nombre: "León",
            descripcion: "Es el segundo felino mas grande del mundo, los machos presentan melena, las hembras conservan el patrón de pelo corto y grueso, sus fuertes mandíbulas y garras afiladas le permiten cazar presas grandes,",
            img: "assets/img/leon.jpg",
        },
        {
            nombre: "Toro",
            descripcion: "Se trata de un ejemplar adulto y macho que pertenece al grupo de los bóvidos. Se caracteriza por su cuerpo robusto, cubierto de pelo corto, y por sus cuernos.",
            img: "assets/img/toro.jpg",
        },
    ];

    constructor() {

    }

    //Función que retorna toda la lista de datos con la información de los animales.
    getAnimales(): AnimalInterface[] {
        return this.animales;
    }

    //Función que retorna el detalle de datos con la información de un animal en particular. 
    getAnimal(index: number) {
        return this.animales[index];
    }

    //Función que retorna una lista de datos con la información de los animales filtrada por una cadena de caracteres de busqueda.
    buscarAnimales(texto: string): AnimalInterface[] {
        let animalesArray: AnimalInterface[] = [];
        texto = texto.toLowerCase();
        for (let i = 0; i < this.animales.length; i++) {
            let animal = this.animales[i];
            let nombre = animal.nombre.toLowerCase();
            if (nombre.indexOf(texto) >= 0) {
                animal.index = i;
                animalesArray.push(animal);
            }
        }
        return animalesArray;
    }
}

//Interfaz que define la estructrua de la lista de los animales.
export interface AnimalInterface {
    nombre: string,
    descripcion: string,
    img: string,
    index?: number
};