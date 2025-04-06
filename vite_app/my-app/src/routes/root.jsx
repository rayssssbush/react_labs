// src/routes/root.jsx
import { Outlet } from 'react-router-dom'

function Root() {
	return (
		<div id='main'>
			<nav>
				<a href={`/students/1`}>Student1</a>
				<a href={`/students/2`}>Student2</a>
				<a href={`/products/1`}>Product1</a>
				<a href={`/products/2`}>Product2</a>
			</nav>
			<div id='content'>
				<Outlet /> {/* Здесь будут отображаться вложенные маршруты */}
			</div>
		</div>
	)
}

export default Root
