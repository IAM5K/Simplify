import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'geometry',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'geometry',
    loadChildren: () => import('./geometry/geometry.module').then( m => m.GeometryPageModule)
  },
  {
    path: 'arithmetic',
    loadChildren: () => import('./arithmetic/arithmetic.module').then( m => m.ArithmeticPageModule)
  },
  {
    path: 'trigonometry',
    loadChildren: () => import('./trigonometry/trigonometry.module').then( m => m.TrigonometryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
