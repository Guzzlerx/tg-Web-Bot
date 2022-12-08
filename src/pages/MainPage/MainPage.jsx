import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';

import UseTelegram from '../../hooks/useTelegram';

import saleIcon from '../../assets/SaleIcon.svg';
import moneyBagIcon from '../../assets/moneyBagIcon.svg';
import wbIcon from '../../assets/wbIcon.png';

import './MainPage.css';

const MainPage = () => {
  const { user, closeApp } = UseTelegram();

  return (
    <div className="main">
      <Header />
      <div className="container">
        <h1 className="main__title">
          Надеюсь, что этот бот будет полезен и поможет вам как заработать, так
          и сэкономить{' '}
        </h1>
        <div className="main__hr" />
        <p className="main__info">Используй кнопки ниже</p>
        <div className="main__btn-container">
          <button className="button button_size_big button_color_blue">
            <h3 className="button__title">Халява и Скидки</h3>
            <img className="button__icon" src={saleIcon} alt="sale icon" />
          </button>
          <button className="button button_size_big button_color_sand">
            <h3 className="button__title">Схемы заработка</h3>
            <img
              className="button__icon"
              src={moneyBagIcon}
              alt="money bag icon"
            />
          </button>
        </div>
        <button className="button button_color_purple">
          <h3 className="button__title">Бесплатные покупки на WB</h3>
          <img
            className="button__icon button__icon_type_wb"
            alt="wildberries icon"
            src={wbIcon}
          />
        </button>
        <button className="button button_type_close" onClick={closeApp}>
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default MainPage;
