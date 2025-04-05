import React from 'react'
import styled from 'styled-components'

// Стили для контейнера
const Container = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 20px;
`

// Стили для кнопок с условным рендерингом
const Button = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	background-color: ${props => (props.warn ? 'yellow' : 'green')};
	color: ${props => (props.warn ? 'red' : 'white')};
`

function Block() {
	return (
		<Container>
			{/* Первая кнопка заблокирована */}
			<Button disabled>Button 1 (Disabled)</Button>

			{/* Вторая кнопка с пропсом warn */}
			<Button warn>Button 2 (Warn)</Button>

			{/* Третья кнопка типа reset */}
			<Button type='reset'>Button 3 (Reset)</Button>
		</Container>
	)
}

export default Block
