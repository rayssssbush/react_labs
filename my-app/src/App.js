import { useState } from 'react'

function App() {
	const [text, setText] = useState('react')

	function handleTextClick() {
		setText(prev => prev + '!')
	}

	return (
		<div>
			<p onClick={handleTextClick}>{text}</p>
		</div>
	)
}

export default App
