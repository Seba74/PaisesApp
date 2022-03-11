import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent{
  termino:string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  restCountries: string[] = ['name', 'capital', 'region'];

  constructor(private paisService: PaisService){}
  buscar(termino: string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPor(this.termino, this.restCountries[1])
      .subscribe(paises => {
        this.paises = paises; 
      }, () =>{ 
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.paisService.buscarPor(termino, this.restCountries[1])
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,5),
        (error) => this.paisesSugeridos = []
        );
  }
}
