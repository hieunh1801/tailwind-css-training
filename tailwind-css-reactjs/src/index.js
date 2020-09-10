import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.output.css';
import App from './zappo-clone/app';
import AppTasking from './tasking/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppTasking />
  </React.StrictMode>,
  document.getElementById('root')
);
