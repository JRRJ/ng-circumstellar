import { NgCircumstellarPage } from './app.po';

describe('ng-circumstellar App', () => {
  let page: NgCircumstellarPage;

  beforeEach(() => {
    page = new NgCircumstellarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
