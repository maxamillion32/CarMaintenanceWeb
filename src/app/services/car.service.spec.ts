import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CarService } from './car.service';

describe('Car Service', () => {
  beforeEachProviders(() => [CarService]);

  it('should ...',
      inject([CarService], (service: CarService) => {
    expect(service).toBeTruthy();
  }));
});
