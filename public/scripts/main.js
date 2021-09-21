const RatingController = ({ rating = '0', name }) => {
  const parsedRating = parseFloat(rating);
  // Round to nearest 0.5, for example when rating is 2.7, 4.2343012, etc..
  const ratingRoundedtoNearestHalf = Math.round(parsedRating * 2) / 2;
  // Multiply to get the rating on scale of 10
  const ratingOnScaleOf10 = ratingRoundedtoNearestHalf * 2;

  const div = document.createElement('div');
  div.className = 'star-input flex flex-row-reverse';

  for (let index = 10; index > 0; index--) {
    const input = document.createElement('input');
    const id = `${name}${index}`;
    const value = index / 2;
    input.name = name;
    input.type = 'radio';
    input.id = id;
    input.value = value;

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.title = `${value} stars`;

    // if a rating is provided
    // disable input selection (reusing this component to show user ratings from db)
    if (ratingOnScaleOf10) {
      input.setAttribute('disabled', 'true');
      if (index === ratingOnScaleOf10) {
        // Set radio to checked
        input.setAttribute('checked', 'checked');
      }
    } else {
      // Select 3 stars by default
      if (index === 6) {
        input.setAttribute('checked', 'checked');
      }
    }

    div.appendChild(input);
    div.appendChild(label);
  }

  return div;
};

const UserReviewComponent = (rating, review, reviewId) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'flex flex-row items-center';

  const userReviewContainer = document.createElement('div');
  userReviewContainer.className = 'text-xl';
  userReviewContainer.style = 'transform: translate3d(-5px,1px,0);';

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

  const ratingView = RatingController({
    rating,
    name: reviewId,
  });

  ratingView.style =
    'margin-right: 29px; transform: translate3d(-5px, 1px, 0);';

  wrapper.appendChild(ratingView);
  wrapper.appendChild(userReviewContainer);

  return wrapper;
};

const UserRatingsList = (data) => {
  const wrapper = document.createElement('div');

  wrapper.className = 'flex flex-col space-y-3';

  data.forEach((element) => {
    wrapper.appendChild(
      UserReviewComponent(
        element.rating,
        element.review,
        `${element.id}#${element.postedAt}`
      )
    );
  });

  return wrapper;
};

function renderComponent(rootId, component) {
  const rootElement = document.getElementById(rootId);
  component.setAttribute('id', rootId);
  component.style = rootElement.style;
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

renderComponent('userRatingController', RatingController({ name: 'rating' }));
