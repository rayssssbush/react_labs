function App() {
	const handleClick = (event, param1, param2) => {
		console.log(event) // Выводим объект события
		console.log(param1, param2) // Выводим два параметра
	}

	return (
		<button onClick={event => handleClick(event, 'first', 'second')}>
			Click me
		</button>
	)
}
