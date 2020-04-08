import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I Love {name}</h2>
      <h5>{rating}/5 </h5>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodIlike = [
  {
    id: 1,
    name: 'Ramen',
    image: 'https://i.ytimg.com/vi/B8y3SSmz4sg/maxresdefault.jpg',
    rating: 4.1,
  },

  {
    id: 2,
    name: 'Steak',
    image: 'https://i.ytimg.com/vi/vmuT33p_6q4/maxresdefault.jpg',
    rating: 4.1,
  },
  {
    id: 3,
    name: 'BBQ',
    image: 'https://i.ytimg.com/vi/B5wIE4zyW5k/maxresdefault.jpg',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Kimchi',
    image:
      'https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg',
    rating: 4.2,
  },
];

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    ></Food>
  );
}

function App() {
  return <div>{foodIlike.map(renderFood)}</div>;
}

export default App;
