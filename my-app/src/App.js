import React, { useState } from 'react'

function App() {
	// Задача 1: Проверка на 18 лет
	const [isAdult, setIsAdult] = useState(false)

	// Задача 2: Видимость абзаца по чекбоксу
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div>
			{/* Задача 1: Чекбокс для проверки возраста */}
			<div>
				<label>
					<input
						type='checkbox'
						checked={isAdult}
						onChange={e => setIsAdult(e.target.checked)}
					/>
					Мне уже есть 18 лет
				</label>

				{isAdult ? (
					<div>
						<h2>Ура, вам уже есть 18</h2>
						<p>здесь расположен контент только для взрослых</p>
					</div>
				) : (
					<div>
						<p>увы, вам еще нет 18 лет:(</p>
					</div>
				)}
			</div>

			{/* Задача 2: Видимость абзаца */}
			<div>
				<label>
					<input
						type='checkbox'
						checked={isVisible}
						onChange={e => setIsVisible(e.target.checked)}
					/>
					Показать абзац
				</label>

				{isVisible && <p>Этот абзац виден, потому что чекбокс отмечен.</p>}
			</div>
		</div>
	)
}

export default App
