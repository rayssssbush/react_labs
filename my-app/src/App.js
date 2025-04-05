function App() {
	const isAdult = true // true или false в зависимости от возраста пользователя

	return (
		<div>
			{isAdult ? <p>Вы совершеннолетний!</p> : <p>Вы несовершеннолетний!</p>}
		</div>
	)
}

export default App
