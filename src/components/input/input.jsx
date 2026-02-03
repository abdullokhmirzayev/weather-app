import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { useWeather } from '../../context/weather-context'
import './input.css'

export const Input = () => {
	const {city, setCity, getData, loading} = useWeather()
	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			getData()
		}
	}


	return (
		<div className='input-wrapper'>
			<input
				type='text'
				placeholder='Search City...'
				className='custom-input'
				value={city}
				onChange={event => {
					setCity(event.target.value)
				}}
				onKeyDown={handleKeyDown}
			/>
			<button disabled={loading} onClick={getData}>
				{loading ? (
					<span class='loader-btn'></span>
				) : (
					<MagnifyingGlassIcon
						width={32}
						height={32}
						className='custom-input__icon'
						title='Search any city'
					/>
				)}
			</button>
		</div>
	)
}
