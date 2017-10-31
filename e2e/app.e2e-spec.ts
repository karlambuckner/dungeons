import { DungeonsPage } from './app.po';

describe('dungeons App', () => {
  let page: DungeonsPage;

  beforeEach(() => {
    page = new DungeonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
