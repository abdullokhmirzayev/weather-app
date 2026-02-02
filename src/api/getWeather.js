const API_KEY = '764a9f6deba03897e1f4ffc24884b848'

export const getWeather = async ({ city }) => {
	const cityAPI = await fetch(
		`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`,
	)
	const dataCity = await cityAPI.json()

	if (!dataCity && dataCity.length === 0) {
		console.error('City name is not defined!')
		return null
	}

	const { lon, lat } = dataCity[0]

	//

	const [currentRes, forecastRes] = await Promise.all([
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
		),
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
		),
	])

	const currentData = await currentRes.json()
	const forecastData = await forecastRes.json()
	const tomarrowData = await forecastData?.list[8]

	return {
		currentData,
		forecastData,
		tomarrowData,
	}
}
