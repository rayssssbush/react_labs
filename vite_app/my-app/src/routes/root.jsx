// src/routes/root.jsx
import { Link, Outlet } from 'react-router-dom'

function Root() {
	return (
		<div id='main'>
			<nav>
				<Link to={`/products/1`}>Product1</Link>
				<Link to={`/products/2`}>Product2</Link>
			</nav>
			<div id='content'>
				<Outlet /> {/* Отображение дочерних маршрутов */}
			</div>
		</div>
	)
}

export default Root
