import './Header.css';

import logo from '../../assets/newBot.svg';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="Логотип" />
      <h2 className="header__title">SALES BOT</h2>
    </div>
  );
};

export default Header;
