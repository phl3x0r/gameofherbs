import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { GameState } from './store';
import { LoadGrower } from './store/grower/grower.actions';
import { Observable } from 'rxjs';
import { selectSelectedTab, SetSelectedTab, Tab } from './store/ui';
import { LoadMarket } from './store/static/static.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  selectedTab$: Observable<number>;

  constructor(private store: Store<GameState>, public afAuth: AngularFireAuth) {
    // this.store.dispatch(new LoadGrower({ uid: 'abcdef' }));
    this.selectedTab$ = this.store.select(selectSelectedTab);
    this.loadStaticData();
  }

  login() {
    this.afAuth.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(res => this.store.dispatch(new LoadGrower({ uid: res.user.uid })));
  }

  loginAnon() {
    this.afAuth.auth
      .signInAnonymously()
      .then(res => this.store.dispatch(new LoadGrower({ uid: res.user.uid })));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  changeSelectedTab($event: number) {
    this.store.dispatch(new SetSelectedTab({ selectedTab: $event }));
  }

  loadStaticData() {
    this.store.dispatch(new LoadMarket());
  }
}
