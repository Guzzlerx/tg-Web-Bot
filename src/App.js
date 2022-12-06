import './App.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <p>
        HELLO, {tg.initDataUnsafe?.user?.first_name}, id -
        {tg.initDataUnsafe?.user?.id}
      </p>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
