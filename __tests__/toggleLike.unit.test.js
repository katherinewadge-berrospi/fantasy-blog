const { toggleLike } = require('../static/js/likeButton');

describe('toggleLike()', () => {
  it('increments count when not already liked', () => {
    const { liked, count } = toggleLike(false, 0);
    expect(liked).toBe(true);
    expect(count).toBe(1);
  });

  it('decrements count when already liked', () => {
    const { liked, count } = toggleLike(true, 42);
    expect(liked).toBe(false);
    expect(count).toBe(41);
  });
});
