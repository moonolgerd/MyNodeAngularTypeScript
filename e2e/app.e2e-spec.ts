import { HeroicAppPage } from './app.po';

describe('heroic-app App', () => {
  let page: HeroicAppPage;

  beforeEach(() => {
    page = new HeroicAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
