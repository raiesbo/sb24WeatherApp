import "./City.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import WeatherDataContext from "./context/WeatherDataContext";
import getCityFromUrl from "./utils/getCityFromUrl";
import WeatherInfo from "./components/WeatherInfo";
import WeatherTemperature from "./components/WeatherTemperature";
import formatString from "./utils/formatString";

export default function Details() {
	const weatherData = useContext(WeatherDataContext);
	type ObjectKey = keyof typeof weatherData;
	const city = getCityFromUrl(useLocation().pathname) as ObjectKey;
	const weather = weatherData[city];

	return (
		<>
			<header className="mainHeader">
				<Link className="arrowLink" to={"/"}>
					<i className="fa-solid fa-arrow-left fa-2xl arrow"></i>
				</Link>
				<h1>
					{formatString(
						`${city === "myLocation" ? weather.name : city}`
					)}
				</h1>
			</header>
			<main>
				{weatherData[city] && (
					<div className="city">
						<WeatherTemperature
							description={weather.weather[0].description}
							icon={weather.weather[0].icon}
							temp={weather.main.temp}
							tempMax={weather.main.temp_max}
							tempMin={weather.main.temp_min}
						/>
						<WeatherInfo
							humidity={weather.main.humidity}
							visibility={weather.visibility}
							sunset={weather.sys.sunset}
							sunrise={weather.sys.sunrise}
						/>
					</div>
				)}
			</main>
		</>
	);
}
