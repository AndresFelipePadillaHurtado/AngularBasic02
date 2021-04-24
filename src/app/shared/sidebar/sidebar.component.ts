import { Component } from '@angular/core';

// Servicio
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent{

  historials:string[] = [];

  constructor(private gifsService: GifsService) { }

  // Metodos // Esto es lo que va a iterar
  get historial(){
    return this.gifsService.historial;
  }

  buscar(item:string){
    this.gifsService.buscarGifs(item);
  }

}
