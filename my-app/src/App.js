import React, { useState } from 'react'

function App() {
	const [favoriteLanguage, setFavoriteLanguage] = useState('')

	const handleLanguageChange = event => {
		setFavoriteLanguage(event.target.value)
	}

	return (
		<div>
			<label>
				<input
					type='radio'
					name='language'
					value='JavaScript'
					onChange={handleLanguageChange}
				/>
				JavaScript
			</label>
			<label>
				<input
					type='radio'
					name='language'
					value='Python'
					onChange={handleLanguageChange}
				/>
				Python
			</label>
			<label>
				<input
					type='radio'
					name='language'
					value='Java'
					onChange={handleLanguageChange}
				/>
				Java
			</label>

			<p>Ваш любимый язык программирования: {favoriteLanguage}</p>
			{favoriteLanguage === 'JavaScript' && (
				<p>Отличный выбор! JavaScript — это супер!</p>
			)}
		</div>
	)
}

export default App
