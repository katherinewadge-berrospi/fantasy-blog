const { toggleLike } = require('../static/js/likeButton');

describe('toggleLike()', () => {
  it('increments count when not already liked', () => {
    expect(toggleLike(false, 0)).toEqual({ liked: true, count: 1 });
  });

  it('decrements count when already liked', () => {
    expect(toggleLike(true, 5)).toEqual({ liked: false, count: 4 });
  });
});