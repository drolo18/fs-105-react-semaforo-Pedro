import React, { useState } from "react";
import { Color } from "./Color";


const TRAFFIC_LIGHT = ["red", "yellow", "green"]


const Home = () => {

	const [trafficLight, setTrafficLight] = useState(TRAFFIC_LIGHT)
	const [ActualColor, setActualColor] = useState(0)
	
	

	const onNextColor = () => {
        const newColor = ActualColor + 1;
        if (newColor === trafficLight.length) {
            setActualColor(0)
            return
        }
        setActualColor(newColor);
    }

	const onColor = (ActualColorIndex) =>{
		setActualColor(ActualColorIndex)
		
	}

	const togglePurple = () => {
		if (trafficLight.includes("purple")) {
            setTrafficLight(trafficLight.filter(color => color !== "purple"))
        } else {
            setTrafficLight([...trafficLight, "purple"])
        }
	}

	return (
		<>
			<div className="traffic-light-container">
				<div className="base">
				</div>
				<div className="traffic-light">
					{trafficLight.map((light , index) => {
						return < Color 
						ActualColor={light} 
						ActualColorIndex={index} 
						onColor={onColor} 
						glow = {ActualColor === index ? "glow" : "" }/>
					})}
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center ">
			<button className="btn btn-primary btn-lg" onClick={onNextColor}>Change Traffic</button>
			<button className="btn btn-secondary btn-lg" onClick={togglePurple}>{trafficLight.includes("purple") ? "Remove Purple" : "Add Purple"}</button>
			</div>
		</>
	);
};

export default Home;