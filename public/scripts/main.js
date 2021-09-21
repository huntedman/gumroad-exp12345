const RatingView = ({ rating }) => {
  const roundedRating = Math.round(parseInt(rating));

  const div = document.createElement('div');
  div.className = 'flex flex-row space-x-1';
  div.style = 'transform: translate3d(1px, -1px, 0);';

  for (let index = 0; index < 5; index++) {
    const star = StarComponent(index < roundedRating);
    div.appendChild(star);
  }
  return div;
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

const fetchReviews = fetch(
  'https://hjsb4f5ur0.execute-api.us-east-1.amazonaws.com/'
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    renderComponent('user_ratings_list', UserRatingsList(data));
  });
