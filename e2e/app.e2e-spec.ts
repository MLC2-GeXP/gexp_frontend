import { GexpFrontPage } from './app.po';

describe('gexp-front App', function() {
  let page: GexpFrontPage;

  beforeEach(() => {
    page = new GexpFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
