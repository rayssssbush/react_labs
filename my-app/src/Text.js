import React from 'react'

const Text = React.memo(function Text() {
	console.log('text render')
	return <p>long text</p>
})

export default Text
