import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule }from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { RegionComponent } from './pages/region/region.component';
import { PaisComponent } from './pages/pais/pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    CapitalComponent,
    RegionComponent,
    PaisComponent,
    VerPaisComponent,
    PaisTableComponent,
    PaisInputComponent
  ],
  exports: [
    CapitalComponent,
    RegionComponent,
    PaisComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PaisModule { }
