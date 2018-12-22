import { UIActions, UIActionTypes } from './ui.actions';
import { Tab } from './ui.model';

export interface UIState {
  selectedTab: Tab;
  isLoggedIn: boolean;
}

export const initialState: UIState = {
  selectedTab: Tab.HOME,
  isLoggedIn: false
};

export function uiReducer(state = initialState, action: UIActions): UIState {
  switch (action.type) {
    case UIActionTypes.LoadUIs:
      return state;

    case UIActionTypes.SetSelectedTab:
      return { ...state, selectedTab: action.payload.selectedTab };

    case UIActionTypes.SetLoggedIn:
      return { ...state, isLoggedIn: true };

    case UIActionTypes.SetLoggedOut: {
      return { ...state, isLoggedIn: false };
    }

    default:
      return state;
  }
}
