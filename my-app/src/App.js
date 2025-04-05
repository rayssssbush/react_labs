function App() {
	const handleClick = (param1, param2, event) => {
		console.log(param1, param2) // Выводим два параметра
		console.log(event) // Выводим объект события
	}

	return (
		<button onClick={event => handleClick('first', 'second', event)}>
			Click me
		</button>
	)
}
