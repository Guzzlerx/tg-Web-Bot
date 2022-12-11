// ХАЛЯВА И СКИДКИ
import foodAndDeliveryIcon from '../assets/icons/freebieAndDiscounts/food_and_delivery.svg';
import servicesSubscribeIcon from '../assets/icons/freebieAndDiscounts/services_subscribe.svg';
import freebieMoneyIcon from '../assets/icons/freebieAndDiscounts/freebie_money.svg';
import moneyWithoutPercentIcon from '../assets/icons/freebieAndDiscounts/money_without_percent.svg';

// ЕДА И ДОСТАВКА
import burgerKingIcon from '../assets/icons/foodAndDelivery/burger_king.svg';
import tanukiFamilyIcon from '../assets/icons/foodAndDelivery/tanuki_family.svg';
import yourPizzaIcon from '../assets/icons/foodAndDelivery/your_pizza.svg';
import magnitIcon from '../assets/icons/foodAndDelivery/magnit.svg';
import mnogoLososyaIcon from '../assets/icons/foodAndDelivery/mnogo_lososya.svg';
import flor2uIcon from '../assets/icons/foodAndDelivery/flor2_you.svg';
import globusIcon from '../assets/icons/foodAndDelivery/globus.svg';
import sberIcon from '../assets/icons/foodAndDelivery/sberbank.svg';
import pyaterochkaIcon from '../assets/icons/foodAndDelivery/pyaterochka.svg';
import winelabIcon from '../assets/icons/foodAndDelivery/winelab.svg';

// ПОДПИСКА НА СЕРВИСЫ
import vkMusicIcon from '../assets/icons/servicesSubcribe/vk_music.svg';
import okkoIcon from '../assets/icons/servicesSubcribe/okko.svg';
import yandex360Icon from '../assets/icons/servicesSubcribe/yandex_360.svg';
import premierIcon from '../assets/icons/servicesSubcribe/premier.svg';
import startIcon from '../assets/icons/servicesSubcribe/start.svg';
import yandexMarketIcon from '../assets/icons/servicesSubcribe/yandex_market.svg';
import yandexAfishaIcon from '../assets/icons/servicesSubcribe/yandex_afisha.svg';

// ХАЛЯВНЫЕ ДЕНЬГИ
import renessansBankIcon from '../assets/icons/freebieMoney/renessans_bank.svg';
import alfaBankIcon2 from '../assets/icons/freebieMoney/alfa2_bank.svg';
import alfaBankIcon from '../assets/icons/freebieMoney/alfa_bank.svg';
import mtsIcon from '../assets/icons/freebieMoney/mts.svg';
import otkritieBankIcon from '../assets/icons/freebieMoney/otkritie_bank.svg';

// ДЕНЬГИ БЕЗ %
import limeIcon from '../assets/icons/moneyWithoutPercent/lime.svg';
import moneyManIcon from '../assets/icons/moneyWithoutPercent/money_man.svg';
import belkaIcon from '../assets/icons/moneyWithoutPercent/belka.svg';
import maxIcon from '../assets/icons/moneyWithoutPercent/max.svg';

const freebieButton = [
  {
    title: 'Еда и доставка',
    icon: foodAndDeliveryIcon,
    color: 'rgba(204, 113, 93, 1)',
    navLink: 'food_and_delivery',
    content: [
      {
        title: 'Бургер Кинг',
        icon: burgerKingIcon,
        navLink: 'burger_king',
        color: 'rgba(204, 113, 93, 1)',
        info: 'Burger king',
      },
      {
        title: 'TanukiFamily',
        icon: tanukiFamilyIcon,
        navLink: 'tanuki_family',
        color: 'rgba(77, 137, 76, 1)',
        info: 'TanukiFamily',
      },
      {
        title: 'Твоя пицца',
        icon: yourPizzaIcon,
        navLink: 'your_pizza',
        color: '#7A5DCC',
        info: 'Твоя пицца',
      },
      {
        title: 'Скидка 25% в Магните',
        icon: magnitIcon,
        navLink: 'magnit',
        color: 'rgba(204, 166, 93, 1)',
        info: 'Скидка 25% в Магните',
      },
      {
        title: 'Много Лосося',
        icon: mnogoLososyaIcon,
        navLink: 'mnogo_lososya',
        color: '#87CC5D',
        info: 'Много Лосося',
      },
      {
        title: 'Flour2u скидка -40%',
        icon: flor2uIcon,
        navLink: 'flor2u',
        color: '#5D83CC',
        info: 'Flour2u скидка -40%',
      },
      {
        title: 'Глобус',
        icon: globusIcon,
        navLink: 'globus',
        color: '#CC715D',
        info: 'Глобус',
      },
      {
        title: 'СберМегаМаркет',
        icon: sberIcon,
        navLink: 'sber_market',
        color: '#4D894C',
        info: 'СберМегаМаркет',
      },
      {
        title: 'Пятерочка',
        icon: pyaterochkaIcon,
        navLink: 'pyaterochka',
        color: '#7A5DCC',
        info: 'Пятерочка',
      },
      {
        title: 'ВинЛаб',
        icon: winelabIcon,
        navLink: 'winelab',
        color: '#CCA65D',
        info: 'ВинЛаб',
      },
    ],
  },
  {
    title: 'Подписка на сервисы',
    icon: servicesSubscribeIcon,
    color: 'rgba(77, 137, 76, 1)',
    navLink: 'services_subscribe',
    content: [
      {
        title: 'VK музыка бесплатно',
        icon: vkMusicIcon,
        navLink: 'vk_music',
        color: 'rgba(204, 113, 93, 1)',
        info: 'VK музыка бесплатно',
      },
      {
        title: 'Okko бесплатная подписка',
        icon: okkoIcon,
        navLink: 'okko',
        color: 'rgba(77, 137, 76, 1)',
        info: 'Okko бесплатная подписка',
      },
      {
        title: 'Яндекс 360',
        icon: yandex360Icon,
        navLink: 'yandex_360',
        color: '#7A5DCC',
        info: 'Яндекс 360',
      },
      {
        title: 'Premier бесплатная подписка',
        icon: premierIcon,
        navLink: 'premier',
        color: 'rgba(204, 166, 93, 1)',
        info: 'Premier бесплатная подписка',
      },
      {
        title: 'Start бесплатная подписка',
        icon: startIcon,
        navLink: 'start',
        color: '#87CC5D',
        info: 'Start бесплатная подписка',
      },
      {
        title: 'Яндекс Маркет',
        icon: yandexMarketIcon,
        navLink: 'yandex_market',
        color: '#5D83CC',
        info: 'Яндекс Маркет',
      },
      {
        title: 'Яндекс Афиша',
        icon: yandexAfishaIcon,
        navLink: 'yandex_afisha',
        color: '#CC715D',
        info: 'Яндекс Афиша',
      },
    ],
  },
  {
    title: 'Халявные деньги',
    icon: freebieMoneyIcon,
    navLink: 'freebie_money',
    color: '#7A5DCC',
    content: [
      {
        title: '3000 от Ренессанс',
        icon: renessansBankIcon,
        info: '3000 от Ренессанс',
        navLink: 'renessans_bank',
        color: 'rgba(204, 113, 93, 1)',
      },
      {
        title: '20 000 от Альфа Банка',
        icon: alfaBankIcon2,
        info: '20 000 от Альфа Банка',
        navLink: 'alfa_bank',
        color: '#4D894C',
      },
      {
        title: '500 от Альфа Банка',
        icon: alfaBankIcon,
        info: '500 от Альфа Банка',
        navLink: 'alfa2_bank',
        color: '#7A5DCC',
      },
      {
        title: '1000 от МТС',
        icon: mtsIcon,
        info: '1000 от МТС',
        navLink: 'mts',
        color: '#CCA65D',
      },
      {
        title: '2023 от Открытия',
        icon: otkritieBankIcon,
        info: '2023 от Открытия',
        navLink: 'open_bank',
        color: '#87CC5D',
      },
    ],
  },
  {
    title: 'Деньги без %',
    icon: moneyWithoutPercentIcon,
    navLink: 'money_without_percent',
    color: 'rgba(204, 147, 93, 1)',
    content: [
      {
        title: 'Lime',
        icon: limeIcon,
        navLink: 'lime',
        color: '#CC715D',
        info: 'Lime',
      },
      {
        title: 'MoneyMan',
        icon: moneyManIcon,
        navLink: 'money_man',
        color: '#4D894C',
        info: 'MoneyMan',
      },
      {
        title: 'Belka',
        icon: belkaIcon,
        navLink: 'belka',
        color: '#7A5DCC',
        info: 'Belka',
      },
      {
        title: 'Max',
        navLink: 'max',
        color: '#CCBA5D',
        icon: maxIcon,
        info: 'Max',
      },
    ],
  },
];

export { freebieButton };
