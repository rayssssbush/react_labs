import React from 'react'

// Компонент User, который просто выводит текст
function User() {
	return (
		<div>
			<h2>Пользователь</h2>
			<p>Здесь будет информация о пользователе.</p>
		</div>
	)
}

// Компонент App, который использует компонент User
function App() {
	return (
		<div>
			<h1>Мой сайт</h1>
			<User /> {/* Использование компонента User */}
		</div>
	)
}

export default App
