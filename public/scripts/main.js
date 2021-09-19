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

const RatingView = ({ rating, className, id }) => {
  const roundedRating = Math.round(parseInt(rating));

  const div = document.createElement('div');
  div.setAttribute('id', id);
  div.className = className;
  div.style = 'transform: translate3d(1px, -1px, 0);';

  for (let index = 0; index < 5; index++) {
    const star = StarComponent(index < roundedRating);
    div.appendChild(star);
  }
  return div;
};

const FinalRatingComponent = () => {
  const rating = 3.5;

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

function renderComponent(rootId, component) {
  const rootElement = document.getElementById(rootId);
  component.setAttribute('id', rootId);
  rootElement.parentNode.replaceChild(component, rootElement);
}

renderComponent('rating_component', RatingController());
renderComponent('final_rating_component', FinalRatingComponent());

{
  /* <span style="margin-right: 24px;" class="text-3xl ml-1">
          3.8
        </span>
				<div class="flex flex-row justify-between items-center w-full">
          <div style="transform: translate3d(1px, -1px, 0); height: 30px;" class="flex flex-row space-x-1">
            <svg width="30" height="29.99" viewBox="0 0 30 29.99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8947 11.3211C29.6603 10.6474 29.0892 10.1495 28.3862 10.047L20.3164 8.80207L16.7135 1.06914C16.3767 0.439371 15.7323 0 15 0C14.2677 0 13.6233 0.439371 13.2865 1.06914L9.68361 8.80207L1.56989 10.047C0.910833 10.1495 0.339651 10.6474 0.105319 11.3211C-0.129012 11.9802 0.0320908 12.7271 0.54469 13.2251L6.43226 19.2445L5.02628 27.8122C4.92376 28.5152 5.23132 29.2182 5.78785 29.6576C6.1247 29.8919 6.49085 29.9944 6.90093 29.9944C7.19384 29.9944 7.5014 29.9212 7.80896 29.7601L15 25.7764L22.191 29.7601C22.4986 29.9212 22.8062 29.9944 23.0991 29.9944C23.5092 29.9944 23.8753 29.8919 24.2121 29.6576C24.7687 29.2182 25.0762 28.5152 24.9737 27.8122L23.5677 19.2445L29.4553 13.2251C29.9679 12.7271 30.129 11.9802 29.8947 11.3211Z" fill="url(#paint0_linear)"/>
            </g>
            <defs>
            <filter id="filter0_i" x="0" y="0" width="30" height="29.9944" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="29.9944" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFCD69"/>
            <stop offset="1" stop-color="#FDCE71"/>
            </linearGradient>
            </defs>
            </svg>
            <svg width="30" height="29.99" viewBox="0 0 30 29.99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8947 11.3211C29.6603 10.6474 29.0892 10.1495 28.3862 10.047L20.3164 8.80207L16.7135 1.06914C16.3767 0.439371 15.7323 0 15 0C14.2677 0 13.6233 0.439371 13.2865 1.06914L9.68361 8.80207L1.56989 10.047C0.910833 10.1495 0.339651 10.6474 0.105319 11.3211C-0.129012 11.9802 0.0320908 12.7271 0.54469 13.2251L6.43226 19.2445L5.02628 27.8122C4.92376 28.5152 5.23132 29.2182 5.78785 29.6576C6.1247 29.8919 6.49085 29.9944 6.90093 29.9944C7.19384 29.9944 7.5014 29.9212 7.80896 29.7601L15 25.7764L22.191 29.7601C22.4986 29.9212 22.8062 29.9944 23.0991 29.9944C23.5092 29.9944 23.8753 29.8919 24.2121 29.6576C24.7687 29.2182 25.0762 28.5152 24.9737 27.8122L23.5677 19.2445L29.4553 13.2251C29.9679 12.7271 30.129 11.9802 29.8947 11.3211Z" fill="url(#paint0_linear)"/>
            </g>
            <defs>
            <filter id="filter0_i" x="0" y="0" width="30" height="29.9944" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="29.9944" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFCD69"/>
            <stop offset="1" stop-color="#FDCE71"/>
            </linearGradient>
            </defs>
            </svg>
            <svg width="30" height="29.99" viewBox="0 0 30 29.99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8947 11.3211C29.6603 10.6474 29.0892 10.1495 28.3862 10.047L20.3164 8.80207L16.7135 1.06914C16.3767 0.439371 15.7323 0 15 0C14.2677 0 13.6233 0.439371 13.2865 1.06914L9.68361 8.80207L1.56989 10.047C0.910833 10.1495 0.339651 10.6474 0.105319 11.3211C-0.129012 11.9802 0.0320908 12.7271 0.54469 13.2251L6.43226 19.2445L5.02628 27.8122C4.92376 28.5152 5.23132 29.2182 5.78785 29.6576C6.1247 29.8919 6.49085 29.9944 6.90093 29.9944C7.19384 29.9944 7.5014 29.9212 7.80896 29.7601L15 25.7764L22.191 29.7601C22.4986 29.9212 22.8062 29.9944 23.0991 29.9944C23.5092 29.9944 23.8753 29.8919 24.2121 29.6576C24.7687 29.2182 25.0762 28.5152 24.9737 27.8122L23.5677 19.2445L29.4553 13.2251C29.9679 12.7271 30.129 11.9802 29.8947 11.3211Z" fill="url(#paint0_linear)"/>
            </g>
            <defs>
            <filter id="filter0_i" x="0" y="0" width="30" height="29.9944" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="29.9944" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFCD69"/>
            <stop offset="1" stop-color="#FDCE71"/>
            </linearGradient>
            </defs>
            </svg>
            <svg width="30" height="29.99" viewBox="0 0 30 29.99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8947 11.3211C29.6603 10.6474 29.0892 10.1495 28.3862 10.047L20.3164 8.80207L16.7135 1.06914C16.3767 0.439371 15.7323 0 15 0C14.2677 0 13.6233 0.439371 13.2865 1.06914L9.68361 8.80207L1.56989 10.047C0.910833 10.1495 0.339651 10.6474 0.105319 11.3211C-0.129012 11.9802 0.0320908 12.7271 0.54469 13.2251L6.43226 19.2445L5.02628 27.8122C4.92376 28.5152 5.23132 29.2182 5.78785 29.6576C6.1247 29.8919 6.49085 29.9944 6.90093 29.9944C7.19384 29.9944 7.5014 29.9212 7.80896 29.7601L15 25.7764L22.191 29.7601C22.4986 29.9212 22.8062 29.9944 23.0991 29.9944C23.5092 29.9944 23.8753 29.8919 24.2121 29.6576C24.7687 29.2182 25.0762 28.5152 24.9737 27.8122L23.5677 19.2445L29.4553 13.2251C29.9679 12.7271 30.129 11.9802 29.8947 11.3211Z" fill="url(#paint0_linear)"/>
            </g>
            <defs>
            <filter id="filter0_i" x="0" y="0" width="30" height="29.9944" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
            </filter>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="29.9944" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFCD69"/>
            <stop offset="1" stop-color="#FDCE71"/>
            </linearGradient>
            </defs>
            </svg>
            <svg width="30" height="29.99" viewBox="0 0 30 29.99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.8947 11.3211C29.6603 10.6474 29.0892 10.1495 28.3862 10.047L20.3164 8.80207L16.7135 1.06914C16.3767 0.439371 15.7323 0 15 0C14.2677 0 13.6233 0.439371 13.2865 1.06914L9.68361 8.80207L1.56989 10.047C0.910833 10.1495 0.339651 10.6474 0.105319 11.3211C-0.129012 11.9802 0.0320908 12.7271 0.54469 13.2251L6.43226 19.2445L5.02628 27.8122C4.92376 28.5152 5.23132 29.2182 5.78785 29.6576C6.1247 29.8919 6.49085 29.9944 6.90093 29.9944C7.19384 29.9944 7.5014 29.9212 7.80896 29.7601L15 25.7764L22.191 29.7601C22.4986 29.9212 22.8062 29.9944 23.0991 29.9944C23.5092 29.9944 23.8753 29.8919 24.2121 29.6576C24.7687 29.2182 25.0762 28.5152 24.9737 27.8122L23.5677 19.2445L29.4553 13.2251C29.9679 12.7271 30.129 11.9802 29.8947 11.3211Z" fill="#E0E0E0"/>
            </svg>
          </div>
          
        </div> */
}
