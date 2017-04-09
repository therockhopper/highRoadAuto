import { PortalClientPage } from './app.po';

describe('portal-client App', () => {
  let page: PortalClientPage;

  beforeEach(() => {
    page = new PortalClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
