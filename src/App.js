/* eslint-disable react/prop-types */
import React from "react";

function Test({ fav }) {
  return <h3> I Love { fav } </h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Test fav="Mushrooms!" />
    </div>
  );
}

export default App;
