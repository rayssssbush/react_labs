import React, { useEffect } from 'react'

function App() {
	useEffect(() => {
		document.title = 'Новое название страницы'
	}, []) // Пустой массив зависимостей, чтобы выполнить только один раз после рендера.

	return (
		<div>
			<h1>React App</h1>
		</div>
	)
}

export default App
