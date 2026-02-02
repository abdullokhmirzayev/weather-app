import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import './input.css'

export const Input = ({ city, setCity, getData }) => {
	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			getData()
		}
	}

	return (
		<div className='input-wrapper'>
			<input
				type='text'
				placeholder='Search city...'
				className='custom-input'
				value={city}
				onChange={event => {
					setCity(event.target.value)
				}}
				onKeyDown={handleKeyDown}
			/>

			<MagnifyingGlassIcon
				onClick={() => getData()}
				width={32}
				height={32}
				className='custom-input__icon'
				title='Search any city'
			/>
		</div>
	)
}
