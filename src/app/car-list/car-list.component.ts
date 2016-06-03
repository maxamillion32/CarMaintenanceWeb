import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'car-list',
  templateUrl: 'car-list.component.html',
  styleUrls: ['car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: FirebaseListObservable<any>;
  constructor(private af: AngularFire) {

  }

  ngOnInit() {
    this.cars = this.af.database.list('/cars');
    console.log(this.cars);
  }

}
