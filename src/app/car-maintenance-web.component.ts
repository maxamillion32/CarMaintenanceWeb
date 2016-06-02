import { Component } from '@angular/core';
import {CarListComponent} from './car-list';

@Component({
  moduleId: module.id,
  selector: 'car-maintenance-web-app',
  templateUrl: 'car-maintenance-web.component.html',
  styleUrls: ['car-maintenance-web.component.css'],
  directives: [CarListComponent]
})
export class CarMaintenanceWebAppComponent {
  title = 'car-maintenance-web works!';
}
