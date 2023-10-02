import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
  },
  {
    path: 'hero',
    loadChildren: () => import('./hero/hero.module').then((m) => m.HeroModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
  { path: 'generatePattern', loadChildren: () => import('./generate-pattern/generate-pattern.module').then(m => m.GeneratePatternModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
