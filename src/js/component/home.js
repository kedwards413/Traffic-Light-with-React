import React, { useState } from "react";

//create your first component

export const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="container d-flex">
			<div className="trafficLight">
					<div
						className={color === "red" ? "redOn" : "redOff"}
						onClick={() => setColor("red")}
					/>
					<div
						className={
							color === "yellow" ? "yellowOn" : "yellowOff"
						}
						onClick={() => setColor("yellow")}
					/>
					<div
						className={color === "green" ? "greenOn" : "greenOff"}
						onClick={() => setColor("green")}
					/>
			</div>
		</div>
	);
};
