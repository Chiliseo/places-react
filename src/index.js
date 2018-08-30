import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App,{Title} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Title />, document.getElementsByTagName("title")[0]);
registerServiceWorker();
