import React from 'react'
import styled from 'styled-components'

// Стили для контейнера
const Container = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 20px;
`

// Стили для кнопок
const Button = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	// Дополнительные стили для заблокированной кнопки
	&:disabled {
		background-color: gray;
		cursor: not-allowed;
	}
`

function Block() {
	return (
		<Container>
			{/* Первая кнопка заблокирована */}
			<Button disabled>Button 1 (Disabled)</Button>

			{/* Вторая кнопка обычная */}
			<Button>Button 2</Button>

			{/* Третья кнопка типа reset */}
			<Button type='reset'>Button 3 (Reset)</Button>
		</Container>
	)
}

export default Block
