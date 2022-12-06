const tg = window.Telegram.WebApp;

const UseTelegram = () => {
  const closeApp = () => {
    tg.close();
  };

  const readyApp = () => {
    tg.ready();
  };

  return {
    tg,
    closeApp,
    readyApp,
    user: tg.initDataUnsafe?.user,
  };
};

export default UseTelegram;
