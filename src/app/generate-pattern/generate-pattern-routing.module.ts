import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratePatternComponent } from './generate-pattern.component';

const routes: Routes = [{ path: '', component: GeneratePatternComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratePatternRoutingModule { }
