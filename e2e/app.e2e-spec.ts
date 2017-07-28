import { WoWSDataPage } from './app.po';

describe('wo-ws-data App', () => {
  let page: WoWSDataPage;

  beforeEach(() => {
    page = new WoWSDataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
