import { useLocation } from 'react-router-dom'
import { Input } from '../input/input'
import './current-weather.css'

export const CurrentWeather = ({
	data,
	city,
	setCity,
	getData,
	selectedCity,
	loading,
}) => {
	const location = useLocation()

	const displayData =
		location.pathname === '/tomorrow' ? data.tomarrowData : data.currentData

	return (
		<>
			<div className='current-weather'>
				<Input city={city} setCity={setCity} getData={getData} loading={loading} />

				<img
					src={`https://openweathermap.org/img/wn/${displayData?.weather[0].icon}@2x.png`}
					alt='weather-icon'
					className='current-weather-icon'
				/>

				<div className='current-weather__temp'>
					<p className='temp__num'>{`${Math.round(displayData?.main?.temp)}`}</p>
					<p className='temp__c'>°C</p>
				</div>

				<p className='current-weather__status'>
					{displayData?.weather[0].description}
				</p>
				<div className='devider' />
				<p className='current-weather__city'>{selectedCity}</p>
			</div>
		</>
	)
}
