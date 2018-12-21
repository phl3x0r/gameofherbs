import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { GameState } from './store';
import { LoadGrower } from './store/grower.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'gameofherbs';

  constructor(
    private store: Store<GameState>,
    private afAuth: AngularFireAuth
  ) {
    this.store.dispatch(new LoadGrower({ uid: 'abcdef' }));
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
