const state = {
  sticky: false,
  expanded: false,
};

const headerClass = 'header';

const STATES = {
  revealed: headerClass + '__revealed',
  expanded: headerClass + '__expanded',
  switch: headerClass + '__switch',
};

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const inTransition = () => {
    header.classList.add(STATES.switch);
    header.classList.remove(STATES.expanded);

    state.expanded = false;

    setTimeout(() => {
      header.classList.remove(STATES.switch);
    }, 0);
  };

  window.addEventListener('scroll', () => {
    if (!state.sticky && window.pageYOffset > 600) {
      if (state.expanded) inTransition();
      state.sticky = true;
      header.classList.add(STATES.revealed);
      inTransition();
    } else if (state.sticky && window.pageYOffset < 599) {
      if (state.expanded) inTransition();
      state.sticky = false;
      header.classList.remove(STATES.revealed);
      inTransition();
    }
  });

  document.querySelector('.navbar-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    if (!state.expanded) {
      state.expanded = true;
      header.classList.add(STATES.expanded);
    } else {
      state.expanded = false;
      header.classList.remove(STATES.expanded);
    }
  });
});
