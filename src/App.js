import { useEffect } from 'react';

import './App.css';

import UseTelegram from './hooks/useTelegram';
import RouteList from './Navigation/RouteList';

const { readyApp } = UseTelegram();

function App() {
  useEffect(() => {
    readyApp();
  }, []);

  return <RouteList />;
}

export default App;
