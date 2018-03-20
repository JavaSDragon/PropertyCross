import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { FavesComponent } from './faves/faves.component';


const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'result', component: SearchResultComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'faves', component: FavesComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
