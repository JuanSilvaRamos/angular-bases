import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter-module';
import { HeroesModule } from './heroes/heroes-module';
import { DbzModule } from './dbz/dbz.module';

// import { CounterComponent } from './counter/counter-component';
// import { ListComponent } from './heroes/list/list.component';
// import { HeroComponent } from './heroes/hero/hero-component';

@NgModule({
  declarations: [
    AppComponent,
   // CounterComponent
   // HeroComponent,
   // ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    CounterModule,
    DbzModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
