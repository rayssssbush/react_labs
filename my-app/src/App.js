import React from 'react'

// Компонент Employee
function Employee({ surname, name, patronymic, salary }) {
	return (
		<div>
			<h2>Работник</h2>
			<p>
				<strong>Фамилия:</strong> {surname}
			</p>
			<p>
				<strong>Имя:</strong> {name}
			</p>
			<p>
				<strong>Отчество:</strong> {patronymic}
			</p>
			<p>
				<strong>Зарплата:</strong> {salary} руб.
			</p>
			<hr />
		</div>
	)
}

// Компонент App, который использует несколько экземпляров компонента Employee
function App() {
	return (
		<div>
			<h1>Данные о работниках</h1>
			<Employee
				surname='Иванов'
				name='Иван'
				patronymic='Иванович'
				salary='50000'
			/>
			<Employee
				surname='Петров'
				name='Петр'
				patronymic='Петрович'
				salary='60000'
			/>
			<Employee
				surname='Сидоров'
				name='Сидор'
				patronymic='Сидорович'
				salary='55000'
			/>
		</div>
	)
}

export default App
