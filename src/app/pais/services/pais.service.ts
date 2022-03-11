import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1';
  paises:Country[] = [];

  constructor(private http:HttpClient) { }
  
  buscarPor(termino:string, key: string): Observable<Country[]>{

    const params = new HttpParams()
      .set('fields', 'name,capital,cca2,flags,population');

    const url:string = `${this._apiUrl}/${key}/${termino}`;
    return this.http.get<Country[]>(url, {params});

  }

  getPaisById(id: string[]): Observable<Country[]>{
    const url:string = `${this._apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
}
