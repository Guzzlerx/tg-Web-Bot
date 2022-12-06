import './App.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {
  console.log(tg);

  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      work<button onClose={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
