function App() {
	const age = 19 // Возраст пользователя

	return (
		<div>
			{age > 18 ? <p>Вы совершеннолетний.</p> : <p>Вы несовершеннолетний.</p>}
		</div>
	)
}

export default App
