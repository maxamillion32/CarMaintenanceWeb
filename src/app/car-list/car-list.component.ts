import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {MdCard} from '@angular2-material/card/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {CarFormComponent} from '../car-form';

@Component({
  moduleId: module.id,
  selector: 'car-list',
  templateUrl: 'car-list.component.html',
  styleUrls: ['car-list.component.css'],
  directives: [MdCard, MdIcon, CarFormComponent],
  providers: [MdIconRegistry]
})

export class CarListComponent implements OnInit {
  cars: FirebaseListObservable<any>;
  constructor(private af: AngularFire) {

  }

  ngOnInit() {
    this.cars = this.af.database.list('/cars');
  }

}
