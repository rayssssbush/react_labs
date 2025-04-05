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
function App() {
	return (
		<div className={styles.app}>
			<h2 className={styles.title}>Inputs with Shadow</h2>
			<div className={styles.inputWrapper}>
				<Inputs />
			</div>
		</div>
	)
}
export default Inputs
