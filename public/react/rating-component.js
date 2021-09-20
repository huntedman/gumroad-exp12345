'use strict';

const e = React.createElement;

function FinalRatingComponent() {
  const [rating, setRating] = React.useState(0);

  return e('div', null, `Rating is ${rating}`);
}

const domContainer = document.querySelector('#final_rating_component');
ReactDOM.render(e(FinalRatingComponent), domContainer);
