import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SerchGifsResponse, Gifs } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'U7cPWCKMpLn8ZCiqrwhjiNtXZc44rrxr';
  private servicioURL:string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gifs[] = [];

  get historial(){
    return [...this._historial];
  }

  // Inyectar un el servcio
  constructor(private http:HttpClient){

    // Validar si hay informacion guardada en el localstorage
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if( localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  // Metodos
  buscarGifs( query: string = '' ) {

    // Almacenar todo en minuscula
    query.trim().toLowerCase();
    
    // Evitar duplicados en el arreglo
    if(!this._historial.includes(query)){
      this._historial.unshift( query );
      // Obtener los primeros 10
      this._historial = this._historial.slice(0,10);

      // Guardar en el localStorage el histrorial de busqueda
      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }

    // Uso de HttpParams
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query)
    
    // Usar el httpmodule nos ofrece mas funcionalidades a los observables propios de RXJS
    this.http.get<SerchGifsResponse>(`${this.servicioURL}/search`, { params })
    .subscribe( (resp) => {
        this.resultados = resp.data; // Asignar la respuesta al resultado
        // Guurdar en el LocalStorage el resultado del ultimo resultado
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    });

  }

}
