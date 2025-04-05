// Parent.js
import React from 'react'
import Daughter from './Daughter'
import Grandson from './Grandson'

function Parent() {
	return (
		<div>
			<h2>Parent Component</h2>
			<Daughter />
			<Grandson />
		</div>
	)
}

export default Parent
