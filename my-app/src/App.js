import { useState } from 'react'
import Text from './Text' // импортируем отдельный компонент

function App() {
	const [value, setValue] = useState('')

	return (
		<div>
			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder='Type something...'
			/>
			<Text />
		</div>
	)
}

export default App
