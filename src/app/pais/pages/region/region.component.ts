import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent{

  regions: string[] = ['america', 'europe', 'africa', 'asia', 'oceania']
  regionActiva:string = ' ';
  paises: Country[] = [];
  restCountries: string[] = ['name', 'capital', 'region'];

  constructor(private paisService: PaisService){}

  getClaseCSS(region: string): string{
    return (region === this.regionActiva)? 'active': '';
  }

  activarRegion(region: string){
    this.regionActiva = region;
  }

  buscar(region: string){
    this.regionActiva = region;
    this.paisService.buscarPor(region, this.restCountries[2])
      .subscribe(paises => {
        this.paises = paises;
      }, () =>{ 
        this.paises = [];
      });
  }

  sugerencias(termino: string){}
}
