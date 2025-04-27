import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ActualColor, setActualcolor] = useState()
	const [showPurple, setShowPurple] = useState(false);

	const changetraffic = () => {
        if (ActualColor === "red") {
            setActualcolor("yellow")
        } else if (ActualColor === "yellow") {
            setActualcolor("green")
        } else if (ActualColor === "green") {
            setActualcolor("red")
        }
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
					<div className={`red light ${ActualColor == "red" ? "glow" : ""}`} onClick={() => setActualcolor("red")} ></div>
					<div className={`yellow light ${ActualColor == "yellow" ? "glow" : ""}`} onClick={() => setActualcolor("yellow")} ></div>
					<div className={`green light ${ActualColor == "green" ? "glow" : ""}`} onClick={() => setActualcolor("green")} ></div>
					{showPurple && (<div className={`purple light ${ActualColor === "purple" ? "glow" : ""}`}onClick={() => setActualcolor("purple")}></div>)}
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center ">
			<button className="btn btn-primary btn-lg" onClick={changetraffic}>Change Traffic</button>
			<button className="btn btn-secondary btn-lg" onClick={togglePurple}>{showPurple ? "Remove Purple" : "Add Purple"}</button>
			</div>
		</>
	);
};

export default Home;