import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CarMaintenanceWebAppComponent } from '../app/car-maintenance-web.component';

beforeEachProviders(() => [CarMaintenanceWebAppComponent]);

describe('App: CarMaintenanceWeb', () => {
  it('should create the app',
      inject([CarMaintenanceWebAppComponent], (app: CarMaintenanceWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'car-maintenance-web works!\'',
      inject([CarMaintenanceWebAppComponent], (app: CarMaintenanceWebAppComponent) => {
    expect(app.title).toEqual('car-maintenance-web works!');
  }));
});
