'use strict';

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

  React.useEffect(() => {
    const fetchRating = async () => {
      await fetch(
        'https://hjsb4f5ur0.execute-api.us-east-1.amazonaws.com/rating'
      )
        .then((res) => res.json())
        .then((data) => {
          setRating(() => data);
        });
    };

    fetchRating();
  }, []);

  return (
    <div className="flex flex-row">
      <span className="text-3xl ml-1" style={{ marginRight: '24px' }}>
        {rating}
      </span>
      <VanillaComponentReactWrapper>
        {RatingView({ rating: rating })}
      </VanillaComponentReactWrapper>
    </div>
  );
}

const domContainer = document.querySelector('#final_rating_component');
ReactDOM.render(React.createElement(FinalRatingComponent), domContainer);
