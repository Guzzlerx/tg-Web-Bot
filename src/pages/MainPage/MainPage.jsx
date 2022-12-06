import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';

import UseTelegram from '../../hooks/useTelegram';

import './MainPage.css';

const MainPage = () => {
  const { user, closeApp } = UseTelegram();

  return (
    <div className="page">
      <Header />
      <h1 className="title">
        Надеюсь, что этот бот будет полезен и поможет вам как заработать, так и
        сэкономить{' '}
      </h1>
      <button onClick={closeApp}>Закрыть</button>
    </div>
  );
};

export default MainPage;
