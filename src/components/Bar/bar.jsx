import { useContext } from 'react'
import './bar.css'
import { GlobalState } from '../../App'

export default function Bar() {
	const {point} = useContext(GlobalState);

	return (
		<div className="containerBar">
			<div className={point >= 3 ? "progressBar3" : point >= 2 ? "progressBar2" : point >= 1 ? "progressBar1" : "progressBar0"}></div>
			<div className='containerBalls'>
				<div className={point >= 0 ? 'ballGreen' : 'ball'}></div>
				<div className={point >= 1 ? 'ballGreen' : 'ball'}></div>
				<div className={point >= 2 ? 'ballGreen' : 'ball'}></div>
				<div className={point >= 3 ? 'ballGreen' : 'ball'}></div>
			</div>
		</div>
	)
}