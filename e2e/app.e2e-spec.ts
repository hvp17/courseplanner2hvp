import { CoursePlanner2FirstCLIPage } from './app.po';

describe('course-planner2-first-cli App', function() {
  let page: CoursePlanner2FirstCLIPage;

  beforeEach(() => {
    page = new CoursePlanner2FirstCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
