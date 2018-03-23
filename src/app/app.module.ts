import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { Result } from './result';
import { SearchResultService } from './searchResult.service';
import { AppRoutingModule } from './/app-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailComponent } from './detail/detail.component';
import { FavesComponent } from './faves/faves.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultComponent,
    DetailComponent,
    FavesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [SearchResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }