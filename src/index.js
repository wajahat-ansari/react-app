import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'
//ReactDom.render(<App />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//root.render(<App />);