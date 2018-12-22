import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UIEffects } from './ui.effects';
import { UIActionTypes } from './ui.actions';

describe('UIEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: UIEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UIEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(UIEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
