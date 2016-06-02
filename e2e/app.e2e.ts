import { CarMaintenanceWebPage } from './app.po';

describe('car-maintenance-web App', function() {
  let page: CarMaintenanceWebPage;

  beforeEach(() => {
    page = new CarMaintenanceWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('car-maintenance-web works!');
  });
});
