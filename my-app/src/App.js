import React, { useState } from 'react'

function App() {
	// Стейт для отслеживания статуса пользователя (забанен или нет)
	const [isBanned, setIsBanned] = useState(false)

	// Функция для бана
	const banUser = () => {
		setIsBanned(true)
	}

	// Функция для разбана
	const unbanUser = () => {
		setIsBanned(false)
	}

	return (
		<div>
			<h1>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</h1>

			{/* Кнопки для бана и разбана */}
			<button onClick={banUser} disabled={isBanned}>
				Забанить пользователя
			</button>
			<button onClick={unbanUser} disabled={!isBanned}>
				Разбанить пользователя
			</button>
		</div>
	)
}

export default App
