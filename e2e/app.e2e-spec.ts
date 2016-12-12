import { MgrotestPage } from './app.po';

describe('mgrotest App', function() {
  let page: MgrotestPage;

  beforeEach(() => {
    page = new MgrotestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
