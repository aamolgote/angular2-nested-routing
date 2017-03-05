import { NestedRoutingPage } from './app.po';

describe('nested-routing App', function() {
  let page: NestedRoutingPage;

  beforeEach(() => {
    page = new NestedRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
