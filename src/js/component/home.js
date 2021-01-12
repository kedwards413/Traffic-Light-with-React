import React, { useState, useEffect } from "react";

//create your first component

export const Home = () => {
	const [color, setColor] = useState("");
	useEffect(
		() => {
			const interval = setInterval(() => {
				color === "red"
					? setColor("green")
					: color === "yellow"
						? setColor("red")
						: color === "green"
							? setColor("yellow")
							: null;
			}, 1000);
			return () => clearInterval(interval);
		},
		[color]
	);
	return (
		<div className="container d-flex justify-content-center pt-5">
			<div className="trafficLight">
				<div
					className={color === "red" ? "redOn" : "redOff"}
					onClick={() => setColor("red")}
				/>
				<div
					className={color === "yellow" ? "yellowOn" : "yellowOff"}
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
