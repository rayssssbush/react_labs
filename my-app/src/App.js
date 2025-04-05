import React, { useState } from 'react'

function App() {
	const [text, setText] = useState('')
	const [sum, setSum] = useState(0)

	// Функция для транслитерации текста
	const transliterate = input => {
		const translitMap = {
			а: 'a',
			б: 'b',
			в: 'v',
			г: 'g',
			д: 'd',
			е: 'e',
			ё: 'yo',
			ж: 'zh',
			з: 'z',
			и: 'i',
			й: 'y',
			к: 'k',
			л: 'l',
			м: 'm',
			н: 'n',
			о: 'o',
			п: 'p',
			р: 'r',
			с: 's',
			т: 't',
			у: 'u',
			ф: 'f',
			х: 'kh',
			ц: 'ts',
			ч: 'ch',
			ш: 'sh',
			щ: 'shch',
			ы: 'y',
			э: 'e',
			ю: 'yu',
			я: 'ya',
			// Преобразование в верхний регистр
			А: 'A',
			Б: 'B',
			В: 'V',
			Г: 'G',
			Д: 'D',
			Е: 'E',
			Ё: 'Yo',
			Ж: 'Zh',
			З: 'Z',
			И: 'I',
			Й: 'Y',
			К: 'K',
			Л: 'L',
			М: 'M',
			Н: 'N',
			О: 'O',
			П: 'P',
			Р: 'R',
			С: 'S',
			Т: 'T',
			У: 'U',
			Ф: 'F',
			Х: 'Kh',
			Ц: 'Ts',
			Ч: 'Ch',
			Ш: 'Sh',
			Щ: 'Shch',
			Ы: 'Y',
			Э: 'E',
			Ю: 'Yu',
			Я: 'Ya',
		}
		return input
			.split('')
			.map(char => translitMap[char] || char)
			.join('')
	}

	// Обработчик для textarea
	const handleTextChange = e => {
		setText(e.target.value)
	}

	// Обработчик для суммирования чисел
	const handleSumChange = e => {
		const lines = e.target.value.split('\n')
		const sum = lines.reduce((acc, line) => acc + (parseFloat(line) || 0), 0)
		setSum(sum)
	}

	return (
		<div>
			{/* Задача 1: Транслитерация текста */}
			<div>
				<textarea
					value={text}
					onChange={handleTextChange}
					placeholder='Введите текст'
				/>
				<p>Транслит: {transliterate(text)}</p>
			</div>

			{/* Задача 2: Суммирование чисел на каждой строке */}
			<div>
				<textarea
					onChange={handleSumChange}
					placeholder='Введите числа на каждой строке'
				/>
				<p>Сумма чисел: {sum}</p>
			</div>
		</div>
	)
}

export default App
