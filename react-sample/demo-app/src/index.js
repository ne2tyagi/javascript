import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function tick(){
	const elm = (
		<span> Time Now { new Date().toLocaleTimeString() }</span>
		);
	ReactDOM.render(
		elm,
		document.getElementById('tick')
	)
}
setInterval(tick, 2000);