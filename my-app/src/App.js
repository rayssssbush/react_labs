import React from 'react'
import styled from 'styled-components'

// Стилизованный компонент DIVA
const DIVA = styled.div`
	width: 150px;
	height: 150px;
	background-color: yellow;
	border: 2px solid black;
`

// Стилизованный компонент DIVB
const DIVB = styled.div`
	width: 150px;
	height: 150px;
	background-color: green;
	border: 3px solid black;
`

// Контейнер для размещения компонентов
const Container = styled.div`
	display: flex;
	justify-content: space-between;
`

function Block1() {
	return (
		<Container>
			<DIVA />
			<DIVB />
			<DIVA />
		</Container>
	)
}

export default Block1
