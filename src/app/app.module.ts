import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store/reducers';
import { AppEffects } from './store/effects/app.effects';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { GreenhouseModule } from './greenhouse';
import { HomeModule } from './home';
import { MarketModule } from './market';
import { PropagationModule } from './propagation';
import { WardModule } from './ward';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatTabsModule,
    MatIconModule,

    // app modules
    GreenhouseModule,
    HomeModule,
    MarketModule,
    PropagationModule,
    WardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
