import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent{
  termino:string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos:  Country[] = [];
  restCountries: string[] = ['name', 'capital', 'region'];
  mostrarSugerencias : boolean = false;

  constructor(private paisService: PaisService){}
  buscar(termino: string){
    this.mostrarSugerencias = false
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPor(this.termino, this.restCountries[0])
      .subscribe(paises => {
        this.paises = paises; 
        console.log(this.paises)
      }, () =>{ 
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.paisService.buscarPor(termino, this.restCountries[0])
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,5),
        (error) => this.paisesSugeridos = []
        );
  }
}
