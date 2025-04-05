// App.js
import React, { useState } from 'react'

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	const [editNum, setEditNum] = useState(null)
	const [value, setValue] = useState('')

	const result = notes.map((note, index) => (
		<p key={index} onClick={() => startEdit(index)}>
			{note}
		</p>
	))

	function startEdit(index) {
		setEditNum(index)
		setValue(notes[index])
	}

	function changeItem(event) {
		setValue(event.target.value)
		const updatedNotes = [...notes]
		updatedNotes[editNum] = event.target.value
		setNotes(updatedNotes)
	}

	return (
		<div>
			{result}
			{editNum !== null && <input value={value} onChange={changeItem} />}
		</div>
	)
}

export default App // Правильный экспорт компонента
