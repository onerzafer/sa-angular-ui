import { AsUiPage } from './app.po';

describe('as-ui App', () => {
  let page: AsUiPage;

  beforeEach(() => {
    page = new AsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
