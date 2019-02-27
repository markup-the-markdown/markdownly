import { getMarkdown } from './document';

describe('selector test', () => {
  it('returns markdown', () => {
    const state = {
      markdown: '# How are you'
    };

    const markdown = getMarkdown(state);

    expect(markdown).toEqual('# How are you');
  });
});
