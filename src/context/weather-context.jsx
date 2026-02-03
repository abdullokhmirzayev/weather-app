import { createContext, useContext, useEffect, useState } from 'react'
import { getWeather } from '../api/getWeather'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
	const [city, setCity] = useState('Toshkent')
	const [data, setData] = useState(null)
	const [selectedCity, setSelectedCity] = useState(city)
	const [loading, setLoading] = useState(false)

	const getData = async () => {
		setLoading(true)
		try {
			const data = await getWeather({ city })
			setData(data)
			setSelectedCity(city)
			return data
		} catch (error) {
			console.error('Error', error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<WeatherContext.Provider
			value={{
				getData,
				data,
				city,
				setCity,
				selectedCity,
				loading,
			}}
		>
			{children}
		</WeatherContext.Provider>
	)
}

export const useWeather = () => useContext(WeatherContext)
