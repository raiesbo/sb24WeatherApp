import "./WeatherTemperature.css";
import UnitsContext from "../context/UnitsContext";
import { useContext } from "react";
import formatTemp from "../utils/formatTemp";
import formatString from "../utils/formatString";

type Props = {
	description: string;
	icon: string;
	temp: number;
	tempMax: number;
	tempMin: number;
};

export default function WeatherTemperature({
	description,
	icon,
	temp,
	tempMax,
	tempMin,
}: Props) {
	const { withFahrenheit } = useContext(UnitsContext);

	return (
		<div className="cityTemp">
			<div className="info">
				<p>{formatString(description)}</p>
				<img
					className="weatherIcon"
					src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
					alt={description}
					title={description}
				/>
			</div>
			<p className="mainTemp">{formatTemp(temp, withFahrenheit)}</p>
			<div className="subTempWrapper">
				<p>H: {formatTemp(tempMax, withFahrenheit)}</p>
				<p>L: {formatTemp(tempMin, withFahrenheit)}</p>
			</div>
		</div>
	);
}
