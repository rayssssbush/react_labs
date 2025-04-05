import React, { useState, useEffect } from 'react'

function App() {
	const [isVisible, setIsVisible] = useState(false)

	// Обработчик клика для скрытия блока
	function handleClickOutside(event) {
		if (!event.target.closest('.popup')) {
			setIsVisible(false) // Скрываем блок, если клик был вне его
		}
	}

	// Очистка и добавление обработчика события
	useEffect(() => {
		if (isVisible) {
			document.addEventListener('click', handleClickOutside)
		}
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isVisible])

	return (
		<div>
			<a href='#' onClick={() => setIsVisible(true)}>
				Show Block
			</a>

			{isVisible && (
				<div
					className='popup'
					style={{
						padding: '20px',
						backgroundColor: 'lightgreen',
						marginTop: '10px',
					}}
				>
					<p>This is a popup! Click anywhere outside to close it.</p>
				</div>
			)}
		</div>
	)
}

export default App
