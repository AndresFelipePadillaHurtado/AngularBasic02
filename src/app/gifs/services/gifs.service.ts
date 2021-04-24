import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SerchGifsResponse, Gifs } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'U7cPWCKMpLn8ZCiqrwhjiNtXZc44rrxr';
  private _historial: string[] = [];
  public resultados: Gifs[] = [];

  get historial(){
    return [...this._historial];
  }

  // Inyectar un el servcio
  constructor(private http:HttpClient){
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
    }
    
    // Usar el httpmodule nos ofrece mas funcionalidades a los observables propios de RXJS
    this.http.get<SerchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=U7cPWCKMpLn8ZCiqrwhjiNtXZc44rrxr&q=${query}&limit=10`)
    .subscribe( (resp) => {
        console.log(resp.data); // Esta data hay que almacenarla en una propiedad
        this.resultados = resp.data; // Asignar la respuesta al resultado
    });

  }

}
