import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Функция для генерации случайного id
function id() {
	return Math.random().toString(36).substr(2, 9)
}

// Изначальные данные с пользователями
const initUsers = [
	{ id: id(), name: 'user1', surname: 'surn1', age: 30 },
	{ id: id(), name: 'user2', surname: 'surn2', age: 31 },
	{ id: id(), name: 'user3', surname: 'surn3', age: 32 },
]

// Компонент для отображения полей каждого пользователя
function UserField({ id, text, type, changeField }) {
	const [isEdit, setIsEdit] = useState(false)

	return (
		<td>
			{isEdit ? (
				<input
					value={text}
					onChange={event => changeField(id, type, event)}
					onBlur={() => setIsEdit(false)}
				/>
			) : (
				<span onClick={() => setIsEdit(true)}>{text}</span>
			)}
		</td>
	)
}

// Компонент для отображения данных одного пользователя
function User({ id, name, surname, age, changeField }) {
	return (
		<tr>
			<UserField id={id} text={name} type='name' changeField={changeField} />
			<UserField
				id={id}
				text={surname}
				type='surname'
				changeField={changeField}
			/>
			<UserField id={id} text={age} type='age' changeField={changeField} />
		</tr>
	)
}

// Главный компонент, который управляет состоянием пользователей
function Users() {
	const [users, setUsers] = useState(initUsers)

	function changeField(id, field, event) {
		setUsers(
			users.map(user => {
				if (user.id === id) {
					user[field] = event.target.value
				}
				return user
			})
		)
	}

	const rows = users.map(user => {
		return (
			<User
				key={user.id}
				id={user.id}
				name={user.name}
				surname={user.surname}
				age={user.age}
				changeField={changeField}
			/>
		)
	})

	return (
		<div>
			<h1>Список пользователей</h1>
			<table border='1'>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Фамилия</th>
						<th>Возраст</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	)
}

// Рендеринг компонента на экран
ReactDOM.render(<Users />, document.getElementById('root'))
