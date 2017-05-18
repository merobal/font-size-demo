import { FontSizeDemoPage } from './app.po';

describe('font-size-demo App', () => {
  let page: FontSizeDemoPage;

  beforeEach(() => {
    page = new FontSizeDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
