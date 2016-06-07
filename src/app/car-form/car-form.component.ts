import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MdCard} from '@angular2-material/card/card';
import {MdInput} from '@angular2-material/input';
import {Car} from '../models/car';
import {CarService} from '../services/car.service';

@Component({
  moduleId: module.id,
  selector: 'car-form',
  templateUrl: 'car-form.component.html',
  styleUrls: ['car-form.component.css'],
  directives: [MdCard, MdButton, MdInput, MdButton],
  providers: [CarService]
})
export class CarFormComponent implements OnInit {
  car: Car;

  constructor(private carService: CarService) {
    this.car = new Car();
  }

  ngOnInit() {
  }

  save() {
    this.carService.saveCar(this.car);
  }





}
