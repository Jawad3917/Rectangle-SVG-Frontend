// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SvgFigureComponent } from './Components/svg-figure/svg-figure.component';
import { PerimeterDisplayComponent } from './Components/perimeter-display/perimeter-display.component';
import { SvgResizerDirective } from './Components/svg-figure/svg-figure.resizer.directive';


@NgModule({
  declarations: [
    AppComponent,
    SvgFigureComponent,
    PerimeterDisplayComponent,
    SvgResizerDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }