import { useState, useMemo } from 'react'

function triple(n) {
	for (let i = 0; i < 1000000000; i++) {} // медленно
	return n * 3
}

function App() {
	const [text, setText] = useState('react')
	const [num, setNum] = useState(0)

	function handleTextClick() {
		setText(prev => prev + '!')
	}

	function handleNumClick() {
		setNum(prev => prev + 1)
	}

	const result = useMemo(() => triple(num), [num]) // 💨 Кешируем

	return (
		<div>
			<p onClick={handleTextClick}>{text}</p>
			<p onClick={handleNumClick}>{result}</p>
		</div>
	)
}

export default App
