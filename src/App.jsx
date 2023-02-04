import { useState } from 'react';
import './index.scss';

const Key = ({ button, input, setInput })=> {
	const onClickHandler = ()=> {
		if (button === 'c') return setInput('0');
		if (button === '=') {
			try {
				return setInput(eval(input.replace(',', '.')).toFixed(2).toString().replace('.', ','))
			} catch {
				return setInput('err')
			}
		}
		if (input.length < 13) {
			if (input === '0' || input === 'err') return setInput(button);
			return setInput(input => input + button);
		}
	}
	return <div onClick={()=> onClickHandler()} className='key'>{button}</div>
}

function App() {
	const [input, setInput] = useState('0');
	const buttonList = '()%c789/654*321-0.=+'.toLowerCase();
	const buttonArrayList = buttonList.split('');

	return (
		<div className="App">
			<div className="container">
				<div className="visor">{input}</div>
				<div className="keyboard">
					{buttonArrayList.map((button, index) => {
						return <Key key={index} button={button} input={input} setInput={setInput} />
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
