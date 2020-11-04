import React from 'react';

import './index.css';

import Spot from "./spot"
import spotsData from "./spotsData";

function App() {
   
    const spotComponents = spotsData.map(spot => <Spot key={spot.id} place={spot.place}
    cost={spot.price} timeToGo={spot.timeToGo} />);

    return (
      <div className= "cardContainer">
        {spotComponents}
      </div>
    );
};

export default App;
