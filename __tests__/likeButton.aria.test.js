/**
 * @jest-environment jsdom
 */

const { toggleLike } = require('../static/js/likeButton');

describe('Accessible like button', () => {
  let button, countEl;

  beforeEach(() => {
    document.body.innerHTML = `
      <button class="js-like-button"
              aria-pressed="false"
              data-count="0">
        Like (<span class="js-like-count">0</span>)
      </button>
    `;
    button  = document.querySelector('.js-like-button');
    countEl = button.querySelector('.js-like-count');
    button.addEventListener('click', () => {
      const currentlyPressed = button.getAttribute('aria-pressed') === 'true';
      const currentCount    = parseInt(button.dataset.count, 10);
      const { liked, count } = toggleLike(currentlyPressed, currentCount);
      button.setAttribute('aria-pressed', liked);
      button.dataset.count  = count;
      countEl.textContent   = count;
    });
  });

  it('starts with aria-pressed="false" and count 0', () => {
    expect(button.getAttribute('aria-pressed')).toBe('false');
    expect(countEl.textContent).toBe('0');
  });

  it('toggles aria-pressed and updates count on click', () => {
    button.click();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(countEl.textContent).toBe('1');

    button.click();
    expect(button.getAttribute('aria-pressed')).toBe('false');
    expect(countEl.textContent).toBe('0');
  });
});
