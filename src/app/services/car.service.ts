import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Car} from '../models';

@Injectable()
export class CarService {
  carItems: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.carItems = af.database.list('/cars');
  }

  saveCar(car: Car) {
    this.carItems.push(car);
  }

}
