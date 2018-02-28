import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BlinkerApp from './BlinkerApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BlinkerApp />, document.getElementById('root'));
registerServiceWorker();
