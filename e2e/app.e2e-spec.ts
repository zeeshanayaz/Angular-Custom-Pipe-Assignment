import { TitleCasingPage } from './app.po';

describe('title-casing App', () => {
  let page: TitleCasingPage;

  beforeEach(() => {
    page = new TitleCasingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
