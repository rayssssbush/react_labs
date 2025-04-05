import { useState } from 'react'

function App() {
	const [text, setText] = useState('react')
	const [num, setNum] = useState(0)

	function handleTextClick() {
		setText(prev => prev + '!')
	}

	function handleNumClick() {
		setNum(prev => prev + 1)
	}

	return (
		<div>
			<p onClick={handleTextClick}>{text}</p>
			<p onClick={handleNumClick}>{num}</p>
		</div>
	)
}

export default App
