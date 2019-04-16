import { Injectable } from '@angular/core';
import { ProductBuyOrder } from 'shared/interfaces';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FireBaseService {
  constructor(private functions: AngularFireFunctions) {}

  public buyProduct(order: ProductBuyOrder): Observable<any> {
    const buyProduct = this.functions.httpsCallable('buyProduct');
    console.log(order);
    return buyProduct(order).pipe(tap(res => console.log(res)));
  }
}
