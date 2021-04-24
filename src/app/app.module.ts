import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importacion para el manejo del https
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Modulos
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // Modulos
    BrowserModule,
    HttpClientModule,
    SharedModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
