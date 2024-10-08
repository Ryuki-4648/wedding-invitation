import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

function ClosureModal() {

	const [closeModal, setCloseModal] = useState(false)
	
	// モーダルを一度閉じたことを記録
	const [isModalDisplay, setIsModalDisplay] = useState(false)

	const currentDate = dayjs()
	const dueDate = dayjs('2024-12-15')
	const closureDate = dayjs('2024-12-21').format('YYYY年MM月DD日')

	// モーダルを閉じるボタン
	const handleCloseModal = () => {
		setCloseModal(false)
		setIsModalDisplay(true)
	}

	// 期日を過ぎたらモーダルを表示する
	useEffect(() => {
		if (currentDate.isAfter(dueDate) && !isModalDisplay) {
			setCloseModal(true)
		}
	}, [currentDate, dueDate, isModalDisplay])

  return (
		<>
			{closeModal && (
				<>
					<div className='l-overlay'></div>
					<div className='l-closureModal'>
						<p className='c-text01'>本サイトは<br />{closureDate}ごろまでに閉鎖されます。</p>
						<button onClick={handleCloseModal} className='l-closureModal__button'>閉じる</button>
					</div>
				</>
			)}
		</>
  )
}

export default ClosureModal;