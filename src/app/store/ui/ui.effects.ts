import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UIActionTypes } from './ui.actions';

@Injectable()
export class UIEffects {

  @Effect()
  loadUIs$ = this.actions$.pipe(ofType(UIActionTypes.LoadUIs));

  constructor(private actions$: Actions) {}
}
