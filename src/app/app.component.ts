import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { GameState } from './store';
import { LoadGrower } from './store/grower/grower.actions';
import { Observable } from 'rxjs';
import { selectSelectedTab, SetSelectedTab, Tab } from './store/ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  selectedTab$: Observable<number>;

  constructor(private store: Store<GameState>, public afAuth: AngularFireAuth) {
    this.store.dispatch(new LoadGrower({ uid: 'abcdef' }));
    this.selectedTab$ = this.store.select(selectSelectedTab);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  changeSelectedTab($event: number) {
    this.store.dispatch(new SetSelectedTab({ selectedTab: $event }));
  }
}
