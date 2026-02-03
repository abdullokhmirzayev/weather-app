import { NavLink, Outlet } from 'react-router-dom'
import { CurrentWeather } from '../components/current-weather/current-weather'
import './Layout.css'

const RootLayout = () => {
	return (
		<>
			<header></header>
			<main>
				<div className='container main'>
					<CurrentWeather />

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
