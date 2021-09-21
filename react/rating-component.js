'use strict';

// copied from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// Allows to easily display a HTMLElement in a React hierarchy
function VanillaComponentReactWrapper(props) {
  const containerRef = React.useRef();

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.replaceChildren(props.children);
    }
  }, [props]);

  return <div ref={containerRef} />;
}

function FinalRatingComponent() {
  const [rating, setRating] = React.useState(0);
  const [interval, setInverval] = React.useState(0);

  useInterval(async () => {
    setInverval(() => 10000);

    console.log('Polling for data');

    const rating = await fetch(
      'https://hjsb4f5ur0.execute-api.us-east-1.amazonaws.com/rating'
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    setRating(() => rating);
  }, interval);

  return (
    <div className="flex flex-row">
      <span
        className="text-3xl ml-1"
        style={{
          marginLeft: '10px',
          marginRight: '20px',
          transform: 'translateY(2px)',
        }}
      >
        {rating}
      </span>
      <VanillaComponentReactWrapper>
        {RatingController({ rating: rating, name: 'FinalRating' })}
      </VanillaComponentReactWrapper>
    </div>
  );
}

const domContainer = document.querySelector('#final_rating_component');
ReactDOM.render(React.createElement(FinalRatingComponent), domContainer);
