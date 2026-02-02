
import './Layout.css'
import { NavLink, Outlet } from 'react-router-dom'
import { CurrentWeather } from '../components/current-weather/current-weather'

const RootLayout = ({ data, city, setCity, getData, selectedCity }) => {
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
