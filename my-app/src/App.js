// App.js
import React from 'react'
import { MyContext } from './MyContext'
import Parent from './Parent'

function App() {
	return (
		<MyContext.Provider value={42}>
			<Parent />
		</MyContext.Provider>
	)
}

export default App
