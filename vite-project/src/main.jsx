import React from 'react'
import ReactDOM from 'react-dom/client'
import Banniere from './components/Banniere.jsx'
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Banniere />
    <App />
    <Footer />
  </BrowserRouter>
)
