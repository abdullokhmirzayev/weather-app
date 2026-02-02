import { NavLink, Outlet } from 'react-router-dom'
import { CurrentWeather } from '../components/current-weather/current-weather'
import './Layout.css'

const RootLayout = ({
	data,
	city,
	setCity,
	getData,
	selectedCity,
	loading,
}) => {
	return (
		<>
			<header></header>
			<main>
				<div className='container main'>
					<CurrentWeather
						data={data}
						city={city}
						setCity={setCity}
						getData={getData}
						selectedCity={selectedCity}
						loading={loading}
					/>

					<div className='details-section'>
						<nav>
							<NavLink to={'/today'}>Today</NavLink>
							<NavLink to={'/tomorrow'}>Tomarrow</NavLink>
						</nav>
						<Outlet />
					</div>
				</div>
			</main>
			<footer></footer>
		</>
	)
}

export default RootLayout
