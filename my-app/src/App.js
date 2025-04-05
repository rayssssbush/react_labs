import React, { useState, useEffect } from 'react'

function App() {
	const [color, setColor] = useState('white')

	// Обработчик клика для изменения фона
	function handleClick() {
		setColor(color === 'white' ? 'lightblue' : 'white') // Меняем фон на светло-голубой или белый
	}

	useEffect(() => {
		// Добавляем обработчик кликов на документ
		document.addEventListener('click', handleClick)

		// Очистка при размонтировании компонента
		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [color])

	return (
		<div style={{ backgroundColor: color, height: '100vh' }}>
			<h1>Click anywhere to change background color</h1>
		</div>
	)
}

export default App
