// Daughter.js
import React, { useContext } from 'react'
import { MyContext } from './MyContext'

function Daughter() {
	const age = useContext(MyContext)

	return (
		<div>
			<h3>Daughter Component</h3>
			<p>Age: {age}</p>
		</div>
	)
}

export default Daughter
