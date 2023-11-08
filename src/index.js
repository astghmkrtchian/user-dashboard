import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './data/appContext/UserContext';
import { PopupProvider } from './data/appContext/PopupContext';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <PopupProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </PopupProvider>
);