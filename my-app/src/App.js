function App() {
	const handleClick = (param1, event, param2) => {
		console.log(param1, param2) // Выводим два параметра
		console.log(event) // Выводим объект события
	}

	return (
		<button onClick={event => handleClick('first', event, 'second')}>
			Click me
		</button>
	)
}
