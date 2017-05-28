import { ChatMandatory3Page } from './app.po';

describe('chat-mandatory3 App', () => {
  let page: ChatMandatory3Page;

  beforeEach(() => {
    page = new ChatMandatory3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
