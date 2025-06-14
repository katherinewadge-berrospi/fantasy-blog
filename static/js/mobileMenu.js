import { setupMenu } from '../static/js/mobileMenu';

describe('mobile menu', () => {
  let button, menu;
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="toggle">☰</button>
      <nav id="menu" class="closed"></nav>
    `;
    button = document.getElementById('toggle');
    menu   = document.getElementById('menu');
    setupMenu(button, menu);
  });

  it('toggles the .open class on click', () => {
    expect(menu.classList.contains('open')).toBe(false);
    button.click();
    expect(menu.classList.contains('open')).toBe(true);
    button.click();
    expect(menu.classList.contains('open')).toBe(false);
  });
});