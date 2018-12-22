import { Action } from '@ngrx/store';
import { Tab } from './ui.model';

export enum UIActionTypes {
  LoadUIs = '[UI] Load UI',
  SetSelectedTab = '[UI] Set Selected Tab',
  SetLoggedIn = '[UI] Set Logged In',
  SetLoggedOut = '[UI] Set Logged Out'
}

export class LoadUIs implements Action {
  readonly type = UIActionTypes.LoadUIs;
}

export class SetSelectedTab implements Action {
  readonly type = UIActionTypes.SetSelectedTab;
  constructor(public payload: { selectedTab: Tab }) {}
}

export class SetLoggedIn implements Action {
  readonly type = UIActionTypes.SetLoggedIn;
}

export class SetLoggedOut implements Action {
  readonly type = UIActionTypes.SetLoggedOut;
}

export type UIActions = LoadUIs | SetSelectedTab | SetLoggedIn | SetLoggedOut;
