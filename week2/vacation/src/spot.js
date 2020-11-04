import React from "react";

function Spot(props) {

    let styles = {};

    switch (props.timeToGo) {
        case "Summer":
            styles.backgroundColor = "blue";
            break;
        case "Spring":
            styles.backgroundColor = "yellow";
            break;
        case "Winter":
            styles.backgroundColor = "red";
            break;
        case "Fall": 
            styles.backgroundColor = "green" ;
            break;

    }

    let cost = "";

    if(props.cost < 500) {
        cost = "$";
    } else if(props.cost < 1000) {
        cost = "$$";
    } else {
        cost = "$$$";
    }

    return (
        <div className="spotCards" style={styles}>
                <h1>Place: <br/>{props.place}</h1>
                <h3>Cost: ${props.cost} <br/> {cost}</h3>
                <h3>Time to go: {props.timeToGo}</h3>
        </div>
    )
}

export default Spot