import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import '../semantic/dist/semantic.min.css';
import '../node_modules/rc-datetime-picker/dist/picker.min.css';
import Client from './components/Client';



ReactDOM.render(
  <App Client={Client} />,
  document.getElementById('root')
);
