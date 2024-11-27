import { useContext, useState } from 'react'
import './questions.css'
import { GlobalState } from '../../App'

export default function Questions() {
	const {point, setPoint} = useContext(GlobalState);
	const [chiara, setChiara] = useState(false)
	const [firstQuestions, setFirstQuestions] = useState({
		first: true,
		second: true,
		third: true,
		fourth: true
	})
	const [secondQuestions, setSecondQuestions] = useState({
		first: true,
		second: true,
		third: true,
		fourth: true
	})
	const [thirdQuestions, setThirdQuestions] = useState({
		first: true,
		second: true,
		third: true,
		fourth: true
	})

	function handleRight(questionKey, setFirstQuestions) {
		setChiara(false)
		setPoint((prevState) => prevState + 1);
		setFirstQuestions((prevState) => ({
			...prevState,
			[questionKey]: true
		}));
	}

	function handleWrong(questionKey, setFirstQuestions) {
		setChiara(true)
		setFirstQuestions((prevState) => ({
			...prevState,
			[questionKey]: false,
		}));
	}

	return (
		<>
		<div className='containerQuestions'>
			{
				point === 0 &&
				<>
					<p>
						Non ho vita né fiato,
						eppure soffio quando sono attivato.
						Non cammino, ma mi muovo in fretta,
						di caldo e di vento porto una carezza.
					</p>
					<span className='chiSono'><b>Chi sono?</b></span>
					<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
						{chiara && <img className='chiaraX' src="/chiaraX-removebg-preview.png" alt="chiara" />}
					</div>
					<div className='questionsGroup'>
						<div className='questions2'>
							<span className={firstQuestions.first ? 'question' : 'questionNo'} onClick={() => handleWrong("first", setFirstQuestions)}>
								Un ventilatore
							</span>
							<span className={firstQuestions.second ? 'question' : 'questionNo'} onClick={() => handleWrong("second", setFirstQuestions)}>
								Una barca a vela
							</span>
						</div>
						<div className='questions2'>
							<span className={firstQuestions.third ? 'question' : 'questionRight'} onClick={() => handleRight("third", setFirstQuestions)}>
								Un dispositivo che usa l'aria calda
							</span>
							<span className={firstQuestions.fourth ? 'question' : 'questionNo'} onClick={() => handleWrong("fourth", setFirstQuestions)}>
								Un animale del deserto
							</span>
						</div>
					</div>
				</>
			}
						{
				point === 1 &&
				<>
					<p>
						Non sono un artista, ma creo forme sinuose,
						con un tocco leggero, onde e curve graziose.
						Sono elegante, moderno e un po’ tecnologico,
						di certo non sono un oggetto nostalgico.
					</p>
					<span className='chiSono'><b>Chi sono?</b></span>
					<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
						{chiara && <img className='chiaraX' src="/chiaraX-removebg-preview.png" alt="chiara" />}
					</div>
					<div className='questionsGroup'>
						<div className='questions2'>
							<span className={secondQuestions.first ? 'question' : 'questionNo'} onClick={() => handleWrong("first", setSecondQuestions)}>
								Un pittore
							</span>
							<span className={secondQuestions.second ? 'question' : 'questionRight'} onClick={() => handleRight("second", setSecondQuestions)}>
								Un dispositivo di bellezza innovativo
							</span>
						</div>
						<div className='questions2'>
							<span className={secondQuestions.third ? 'question' : 'questionNo'} onClick={() => handleWrong("third", setSecondQuestions)}>
								Una scultura moderna
							</span>
							<span className={secondQuestions.fourth ? 'question' : 'questionNo'} onClick={() => handleWrong("fourth", setSecondQuestions)}>
								Una spazzola di legno
							</span>
						</div>
					</div>
				</>
			}
						{
				point === 2 &&
				<>
					<p>
						Sono amico dei capelli, li curo e li abbraccio,
						senza troppo calore, mai li distruggo né li stacco.
						Sono un vortice d’aria che crea lo stile perfetto,
						con tanti accessori ti rendo l’effetto che hai nel petto.
					</p>
					<span className='chiSono'><b>Chi sono?</b></span>
					<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
						{chiara && <img className='chiaraX' src="/chiaraX-removebg-preview.png" alt="chiara" />}
					</div>
					<div className='questionsGroup'>
						<div className='questions2'>
							<span className={thirdQuestions.first ? 'question' : 'questionRight'} onClick={() => handleRight("first", setThirdQuestions)}>
								Un Airwrap
							</span>
							<span className={thirdQuestions.second ? 'question' : 'questionNo'} onClick={() => handleWrong("second", setThirdQuestions)}>
								Una piastra per capelli
							</span>
						</div>
						<div className='questions2'>
							<span className={thirdQuestions.third ? 'question' : 'questionNo'} onClick={() => handleWrong("third", setThirdQuestions)}>
								Un casco asciugacapelli
							</span>
							<span className={thirdQuestions.fourth ? 'question' : 'questionNo'} onClick={() => handleWrong("fourth", setThirdQuestions)}>
								Un ferro arricciacapelli
							</span>
						</div>
					</div>
				</>
			}
		</div>
		</>
	)
}