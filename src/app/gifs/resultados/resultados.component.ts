import { Component } from '@angular/core';
import { Gifs } from '../interfaces/gifs.interfaces';

// Servicio gifs
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  // Retornar el servicio
  get resultados(): Gifs[]{
    return this.gifsService.resultados; // Este resultados pertenece a la propiedad del sevicio
  }

  // Inyectar nuestro servicio
  constructor(private gifsService: GifsService) { }



}
