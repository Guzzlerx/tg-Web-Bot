import './Header.css';

import logo from '../../assets/newBot.svg';

const Header = ({ isMainPage }) => {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="Логотип" />
      <h2 className="header__title">SALES BOT</h2>
      {!isMainPage && (
        <>
          <div className="hr header__hr" />
          <p className="header__info">Выберите интересующее вас меню</p>
        </>
      )}
    </div>
  );
};

export default Header;
