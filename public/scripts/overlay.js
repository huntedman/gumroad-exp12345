const toggleOverlay = (button) => {
  let state = { closed: true };

  let $button = document.querySelector(button);
  let $overlay = document.querySelector('#overlay');

  // Add event listener to button
  $button.addEventListener('click', (event) => {
    if (!event.target.matches('#add_review_button')) return;
    state.closed ? (state.closed = false) : (state.closed = true);
    $overlay.classList.toggle('visible');
    $overlay.classList.toggle('invisible');
  });

  // Add event listener to overlay
  $overlay.addEventListener('click', (event) => {
    if (!event.target.matches('#overlay')) return;
    state.closed ? (state.closed = false) : (state.closed = true);
    $overlay.classList.toggle('visible');
    $overlay.classList.toggle('invisible');
  });

  return $overlay;
};

toggleOverlay('#add_review_button');
