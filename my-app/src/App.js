function App() {
	const handleClick = (param1, param2) => {
		console.log(param1, param2) // Выводим два параметра
	}

	return (
		<button onClick={() => handleClick('first', 'second')}>Click me</button>
	)
}
