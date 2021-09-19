const RatingController = () => {
  let rating = '1';

  const ratingController = document.createElement('div');
  ratingController.className = 'flex flex-row space-x-1';
  ratingController.style = 'height: 30px; transform: translateX(-1px);';

  function changeHandler(event) {
    rating = event.target.value;
    render();
  }

  for (let index = 1; index <= 5; index++) {
    const label = document.createElement('label');
    const inputId = `rating-${index}`;
    label.setAttribute('for', inputId);

    const star = StarComponent(false);
    star.setAttribute('id', `rating__${index}`);

    const input = document.createElement('input');
    input.setAttribute('id', inputId);
    input.className = 'hidden';
    input.name = 'user-rating';
    input.type = 'radio';
    input.value = index;
    input.addEventListener('change', changeHandler);

    label.appendChild(star);
    label.appendChild(input);
    ratingController.appendChild(label);
  }

  function render() {
    let $1star = document.getElementById('rating__1');
    let $2star = document.getElementById('rating__2');
    let $3star = document.getElementById('rating__3');
    let $4star = document.getElementById('rating__4');
    let $5star = document.getElementById('rating__5');
    $1star.innerHTML = parseInt(rating) >= 1 ? starGolden : starGray;
    $2star.innerHTML = parseInt(rating) >= 2 ? starGolden : starGray;
    $3star.innerHTML = parseInt(rating) >= 3 ? starGolden : starGray;
    $4star.innerHTML = parseInt(rating) >= 4 ? starGolden : starGray;
    $5star.innerHTML = parseInt(rating) >= 5 ? starGolden : starGray;
  }

  return ratingController;
};

function renderComponent(rootId, component) {
  const rootElement = document.getElementById(rootId);
  component.setAttribute('id', rootId);
  rootElement.parentNode.replaceChild(component, rootElement);
}

renderComponent('rating_component', RatingController());
