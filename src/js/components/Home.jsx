import React, { useState } from "react";


const TRAFFIC_LIGHT = ["red", "yellow", "green"]


const Home = () => {

	const [ActualColor, setActualcolor] = useState(0)
	const [showPurple, setShowPurple] = useState(false);
	const [trafficLight, setTrafficLight] = useState(TRAFFIC_LIGHT);

	const onNextColor = () => {
        const newColor = ActualColor + 1;
        if (newColor === trafficLight.length) {
            setActualcolor(0)
            return
        }
        setActualcolor(newColor);
    }
	const togglePurple = () => {
        setShowPurple(!showPurple)
	}

	return (
		<>
			<div className="traffic-light-container">
				<div className="base">

				</div>
				<div className="traffic-light">
					<div className={`red light ${ActualColor == 0 ? "glow" : ""}`} onClick={() => setActualcolor(0)} ></div>
					<div className={`yellow light ${ActualColor == 1 ? "glow" : ""}`} onClick={() => setActualcolor(1)} ></div>
					<div className={`green light ${ActualColor == 2 ? "glow" : ""}`} onClick={() => setActualcolor(2)} ></div>
					{showPurple && (<div className={`purple light ${ActualColor === "purple" ? "glow" : ""}`}onClick={() => setActualcolor("purple")}></div>)}
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center ">
			<button className="btn btn-primary btn-lg" onClick={onNextColor}>Change Traffic</button>
			<button className="btn btn-secondary btn-lg" onClick={togglePurple}>{showPurple ? "Remove Purple" : "Add Purple"}</button>
			</div>
		</>
	);
};

export default Home;