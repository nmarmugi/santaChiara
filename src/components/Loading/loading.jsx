import './loading.css'

export default function Loading() {
	return (
		<div className="containerLoading">
			<div className="containerImage">
				<img className="backgroundImage" src="/6131942.jpg" alt="Background" />
			</div>
			<div className="containerSantaChiara">
				<img src="/rb_2149725762.png" alt="Merry Christmas" />
				<div className='chiaraLoad'>
					<img src="/chiara-removebg-preview.png" alt="Santa Chiara" />
					<div className="load"></div>
				</div>
			</div>
		</div>
	)
}