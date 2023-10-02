import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratePatternRoutingModule } from './generate-pattern-routing.module';
import { GeneratePatternComponent } from './generate-pattern.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    GeneratePatternComponent
  ],
  imports: [
    CommonModule,
    GeneratePatternRoutingModule,
    ButtonModule
  ]
})
export class GeneratePatternModule { }
