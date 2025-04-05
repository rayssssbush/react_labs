import React, { useState } from 'react'

function App() {
	const [isBanned, setIsBanned] = useState(false)

	const banUser = () => setIsBanned(true)
	const unbanUser = () => setIsBanned(false)

	return (
		<div>
			<h1>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</h1>

			{/* Показываем только одну кнопку в зависимости от состояния */}
			{isBanned ? (
				<button onClick={unbanUser}>Разбанить пользователя</button>
			) : (
				<button onClick={banUser}>Забанить пользователя</button>
			)}
		</div>
	)
}

export default App
