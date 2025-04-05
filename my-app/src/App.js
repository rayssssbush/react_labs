import React from 'react'

// Компонент User
function User() {
	return (
		<div>
			<h2>Пользователь</h2>
			<p>Здесь будет информация о пользователе.</p>
		</div>
	)
}

// Компонент App, который использует несколько экземпляров компонента User
function App() {
	return (
		<div>
			<h1>Мой сайт</h1>
			<User /> {/* Первый экземпляр компонента User */}
			<User /> {/* Второй экземпляр компонента User */}
			<User /> {/* Третий экземпляр компонента User */}
		</div>
	)
}

export default App
