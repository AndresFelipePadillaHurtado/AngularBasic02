import { Component, ElementRef, ViewChild} from '@angular/core';

// Servicio del gifs
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  // El ! es para indicar a Angular que el elmento no es nulo
  // Indicar el tipo HTMLInputElement
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  
  // Inyectar el servicio para el historia
  constructor( private gifsService: GifsService){

  }
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    // Restringir insercciones vacias
    if(valor.trim().length === 0 ){
      return;
    }
    this.gifsService.buscarGifs(valor);

    // Limpiar el imput
    this.txtBuscar.nativeElement.value = '';
  }


}
