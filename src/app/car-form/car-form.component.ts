import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MdCard} from '@angular2-material/card/card';
import {MdInput} from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'car-form',
  templateUrl: 'car-form.component.html',
  styleUrls: ['car-form.component.css'],
  directives: [MdCard, MdButton, MdInput, MdButton],
})
export class CarFormComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
