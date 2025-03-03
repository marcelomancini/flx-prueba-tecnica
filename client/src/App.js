import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ModalManager from './components/ModalManager';
import { AppContextProvider } from './context/AppContext';
import './App.css';

function App() {
  return (
    <AppContextProvider>
      <div style={{ height: '100vh', width: '100vw', backgroundColor: '#0000000F' }}>
        <Header />
        <MainContent />
        <ModalManager />
      </div>
    </AppContextProvider>
  );
}

export default App;