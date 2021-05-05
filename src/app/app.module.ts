import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachinesComponent } from './components/machines/machines.component';
import { FooterComponent } from './components/footer/footer.component';

 
 


@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
   
   
    
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
