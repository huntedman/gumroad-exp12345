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
    input.name = 'rating';
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

const RatingView = ({ rating, className }) => {
  const roundedRating = Math.round(parseInt(rating));

  const div = document.createElement('div');
  div.className = className;
  div.style = 'transform: translate3d(1px, -1px, 0);';

  for (let index = 0; index < 5; index++) {
    const star = StarComponent(index < roundedRating);
    div.appendChild(star);
  }
  return div;
};

const FinalRatingComponent = (rating) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-row';

  const scoreSpan = document.createElement('span');
  const ratingView = RatingView({
    rating,
    className: 'flex flex-row space-x-1',
  });

  scoreSpan.style = 'margin-right: 24px;';
  scoreSpan.innerText = rating;
  scoreSpan.className = 'text-3xl ml-1';

  wrapper.appendChild(scoreSpan);
  wrapper.appendChild(ratingView);

  return wrapper;
};

const UserReviewComponent = (rating, review) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-row items-center';

  const userReviewContainer = document.createElement('div');
  userReviewContainer.className = 'text-xl';
  userReviewContainer.style = 'transform: translateY(1px);';

  const scoreSpan = document.createElement('span');
  scoreSpan.className = 'font-bold';

  const reviewSpan = document.createElement('span');
  reviewSpan.className = 'text-gray-800 font-light';
  reviewSpan.style = 'letter-spacing: 0.2px;';

  const commaSpan = document.createElement('span');
  commaSpan.className = 'font-light text-gray-800';
  commaSpan.innerText = ', ';

  scoreSpan.innerText = rating;
  scoreSpan.appendChild(commaSpan);
  reviewSpan.innerText = review;

  userReviewContainer.appendChild(scoreSpan);
  userReviewContainer.appendChild(reviewSpan);

  const ratingView = RatingView({
    rating,
    className: 'flex flex-row space-x-1',
  });

  ratingView.style = 'margin-right: 29px;';

  wrapper.appendChild(ratingView);
  wrapper.appendChild(userReviewContainer);

  return wrapper;
};

const UserRatingsList = (data) => {
  const wrapper = document.createElement('div');

  wrapper.className = 'flex flex-col space-y-3';

  data.forEach((element) => {
    wrapper.appendChild(UserReviewComponent(element.rating, element.review));
  });

  return wrapper;
};

function renderComponent(rootId, component) {
  const rootElement = document.getElementById(rootId);
  component.setAttribute('id', rootId);
  rootElement.parentNode.replaceChild(component, rootElement);
}

renderComponent('rating_component', RatingController());

const fetchReviews = fetch(
  'https://hjsb4f5ur0.execute-api.us-east-1.amazonaws.com/'
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderComponent('user_ratings_list', UserRatingsList(data));
  });
