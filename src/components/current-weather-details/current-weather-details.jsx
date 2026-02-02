import { CurrentWeatherDetailsCard } from './current-weather-details-card/current-weather-details-card'
import './current-weather-details.css'

export const CurrentWeatherDetails = ({ data }) => {
	console.log(data)

	return (
		<div>
			<div className='current-weather__details'>
				<CurrentWeatherDetailsCard
					type={'Real Feel'}
					value={`${data?.main?.feels_like}°C`}
				/>
				<CurrentWeatherDetailsCard
					type={'Humidity'}
					value={`${data?.main.humidity}%`}
				/>
				<CurrentWeatherDetailsCard
					type={'Pressure'}
					value={`${data?.main.pressure}mb`}
				/>
				<CurrentWeatherDetailsCard
					type={'Sea Level'}
					value={`${data?.main.sea_level}hPa`}
				/>
				<CurrentWeatherDetailsCard
					type={'Grnd Level'}
					value={`${data?.main.grnd_level}hPa`}
				/>
				<CurrentWeatherDetailsCard
					type={'Clouds'}
					value={`${data?.clouds.all}%`}
				/>
				<CurrentWeatherDetailsCard
					type={'Wind'}
					value={`${Math.round(data?.wind.speed)} km/h`}
				/>
				<CurrentWeatherDetailsCard
					type={'Temp Max'}
					value={`${Math.round(data?.main.temp_max)} km/h`}
				/>
				<CurrentWeatherDetailsCard
					type={'Temp Min'}
					value={`${Math.round(data?.main.temp_min)} km/h`}
				/>
			</div>
		</div>
	)
}
