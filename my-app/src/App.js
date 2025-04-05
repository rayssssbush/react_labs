import React from 'react'
import styles from './Inputs.module.css'

function Inputs() {
	return (
		<div className={styles.inputContainer}>
			<input className={styles.input} placeholder='Input 1' />
			<input className={styles.input} placeholder='Input 2' />
			<input className={styles.input} placeholder='Input 3' />
		</div>
	)
}

export default Inputs
