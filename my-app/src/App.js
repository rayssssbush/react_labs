import React, { useState } from 'react'

function App() {
	// Инициализация даты в стейте
	const [date, setDate] = useState({
		year: 2025,
		month: 12,
		day: 31,
	})

	// Функция для получения дня недели по заданной дате
	const getWeekday = (year, month, day) => {
		const dateObject = new Date(year, month - 1, day) // В JavaScript месяц начинается с 0 (январь - 0, декабрь - 11)
		const weekdays = [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота',
		]
		return weekdays[dateObject.getDay()]
	}

	// Функция для обновления даты в стейте
	const handleInputChange = (e, field) => {
		const updatedDate = { ...date, [field]: e.target.value }
		setDate(updatedDate)
	}

	return (
		<div>
			<h2>
				Дата: {date.day} {date.month} {date.year} (
				{getWeekday(date.year, date.month, date.day)})
			</h2>

			{/* Инпуты для редактирования даты */}
			<div>
				<label>
					Год:
					<input
						type='number'
						value={date.year}
						onChange={e => handleInputChange(e, 'year')}
					/>
				</label>
			</div>
			<div>
				<label>
					Месяц:
					<input
						type='number'
						value={date.month}
						onChange={e => handleInputChange(e, 'month')}
					/>
				</label>
			</div>
			<div>
				<label>
					День:
					<input
						type='number'
						value={date.day}
						onChange={e => handleInputChange(e, 'day')}
					/>
				</label>
			</div>
		</div>
	)
}

export default App
