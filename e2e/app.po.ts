export class CarMaintenanceWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('car-maintenance-web-app h1')).getText();
  }
}
