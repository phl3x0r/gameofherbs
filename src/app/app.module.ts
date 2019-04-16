import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { GrowerEffects } from './store/grower/grower.effects';
import {
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faSeedling,
  faWarehouse,
  faHome,
  faHandHoldingUsd,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GreenhouseModule } from './greenhouse';
import { HomeModule } from './home';
import { MarketModule } from './market';
import { PropagationModule } from './propagation';
import { WardModule } from './ward';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([GrowerEffects]),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production
        })
      : [],
    AngularFireModule.initializeApp(environment.firebase, 'Game of Herbs'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    FontAwesomeModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,

    // shared
    SharedModule,

    // app modules
    GreenhouseModule,
    HomeModule,
    MarketModule,
    PropagationModule,
    WardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(
      faCog,
      faSeedling,
      faWarehouse,
      faHome,
      faHandHoldingUsd,
      faGoogle,
      faSun
    );
  }
}
