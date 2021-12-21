import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BeerPageComponent } from './pages/beer-page/beer-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeHeaderComponent } from './components/common/home-header/home-header.component';
import { BeerItemComponent } from './components/common/beer-item/beer-item.component';
import { PaginationComponent } from './components/common/pagination/pagination.component';
import {HttpClientModule} from "@angular/common/http";
import { ClampDirective } from './directives/clamp.directive';
import { FooterComponent } from './components/common/footer/footer.component';
import { BeerInfoComponentComponent } from './components/common/beer-info-component/beer-info-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeerPageComponent,
    HomeHeaderComponent,
    BeerItemComponent,
    PaginationComponent,
    ClampDirective,
    FooterComponent,
    BeerInfoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
