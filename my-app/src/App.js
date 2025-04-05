import { useRef } from 'react'

function App() {
	const textRef = useRef('text')

	const handleClick = () => {
		textRef.current += '!'
		console.log(textRef.current) // здесь будет видно изменение
	}

	return (
		<div>
			<p>text</p> {/* отображается статично */}
			<button onClick={handleClick}>Добавить !</button>
		</div>
	)
}

export default App
