import { useContext } from 'react'
import './bar.css'
import { GlobalState } from '../../App'

export default function Bar() {
	const {point} = useContext(GlobalState);

	return (
		<div className="containerBar">
			<div className={point >= 3 ? "progressBar3" : point >= 2 ? "progressBar2" : point >= 1 ? "progressBar1" : "progressBar0"}></div>
			<div className='containerBalls'>
				<img className={point >= 0 ? 'ballGreen' : 'ball'} src="/bauble_3697609.png" alt="Ball" />
				<img className={point >= 1 ? 'ballGreen' : 'ball'} src="/bauble-ball_18344719.png" alt="Ball" />
				<img className={point >= 2 ? 'ballGreen' : 'ball'} src="/christmas-ball_3882498.png" alt="Ball" />
				<img className={point >= 3 ? 'ballGreen' : 'ball'} src="/christmas-ball_9115194.png" alt="Ball" />
			</div>
		</div>
	)
}