import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I Love {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodIlike = [
  {
    id: 1,
    name: "Ramen",
    image: "https://i.ytimg.com/vi/B8y3SSmz4sg/maxresdefault.jpg"
  },

  {
    id: 2,
    name: "Steak",
    image: "https://i.ytimg.com/vi/vmuT33p_6q4/maxresdefault.jpg"
  },
  {
    id: 3,
    name: "BBQ",
    image: "https://i.ytimg.com/vi/B5wIE4zyW5k/maxresdefault.jpg"
  },
  {
    id: 4,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image}></Food>;
}

function App() {
  return <div>{foodIlike.map(renderFood)}</div>;
}

export default App;
