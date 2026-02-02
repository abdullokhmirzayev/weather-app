import { useEffect, useState } from 'react'
import { getWeather } from './api/getWeather'
import './App.css'
import { CurrentWeatherDetails } from './components/current-weather-details/current-weather-details'
import Loader from './components/loader/loader'
import RootLayout from './layout/RootLayout'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

function App() {
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

	if (!data) {
		return <Loader />
	}

	const route = createBrowserRouter([
		{
			path: '/',
			element: (
				<RootLayout
					loading={loading}
					data={data}
					city={city}
					setCity={setCity}
					getData={getData}
					selectedCity={selectedCity}
				/>
			),
			children: [
				{
					index: true,
					element: <Navigate to={'today'} replace />,
				},
				{
					path: 'today',
					element: <CurrentWeatherDetails data={data.currentData} />,
				},
				{
					path: 'tomorrow',
					element: <CurrentWeatherDetails data={data.tomarrowData} />,
				},
			],
		},
	])

	return (
		<>
			<RouterProvider router={route} />
		</>
	)
}

export default App
