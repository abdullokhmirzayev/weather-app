import './App.css'
import { CurrentWeatherDetails } from './components/current-weather-details/current-weather-details'
import Loader from './components/loader/loader'
import RootLayout from './layout/RootLayout'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { useWeather } from './context/weather-context'

function App() {
	const { data } = useWeather()

	if (!data) {
		return <Loader />
	}

	const route = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
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
