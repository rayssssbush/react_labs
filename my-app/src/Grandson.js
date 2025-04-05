// Grandson.js
import React, { useContext } from 'react'
import { MyContext } from './MyContext'

function Grandson() {
	const age = useContext(MyContext)

	return (
		<div>
			<h4>Grandson Component</h4>
			<p>Age divided by 2: {age / 2}</p>
		</div>
	)
}

export default Grandson
