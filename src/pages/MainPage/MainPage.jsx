import { Link } from 'react-router-dom';

import UseTelegram from '../../hooks/useTelegram';

const MainPage = () => {
  const { user, closeApp } = UseTelegram();

  return (
    <div>
      <Link to={'error404'}>
        <p>link</p>
      </Link>
      <p>
        HELLO, {user?.first_name}, id - {user?.id}
      </p>
      <button onClick={closeApp}>Закрыть</button>
    </div>
  );
};

export default MainPage;
