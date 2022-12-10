import { v4 as uuidv4 } from 'uuid';

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

const freebieAndDiscountsCatalogue = [
  {
    title: 'Еда и доставка',
    id: uuidv4(),
    icon: foodAndDeliveryIcon,
    content: [
      {
        id: uuidv4(),
        title: 'Бургер Кинг',
        icon: burgerKingIcon,
        info: 'Burger king',
      },
      {
        id: uuidv4(),
        title: 'TanukiFamily',
        icon: tanukiFamilyIcon,
        info: 'TanukiFamily',
      },
      {
        id: uuidv4(),
        title: 'Твоя пицца',
        icon: yourPizzaIcon,
        info: 'Твоя пицца',
      },
      {
        id: uuidv4(),
        title: 'Скидка 25% в Магните',
        icon: magnitIcon,
        info: 'Скидка 25% в Магните',
      },
      {
        id: uuidv4(),
        title: 'Много Лосося',
        icon: mnogoLososyaIcon,
        info: 'Много Лосося',
      },
      {
        id: uuidv4(),
        title: 'Flour2u скидка -40%',
        icon: flor2uIcon,
        info: 'Flour2u скидка -40%',
      },
      {
        id: uuidv4(),
        title: 'Глобус',
        icon: globusIcon,
        info: 'Глобус',
      },
      {
        id: uuidv4(),
        title: 'СберМегаМаркет',
        icon: sberIcon,
        info: 'СберМегаМаркет',
      },
      {
        id: uuidv4(),
        title: 'Пятерочка',
        icon: pyaterochkaIcon,
        info: 'Пятерочка',
      },
      {
        id: uuidv4(),
        title: 'ВинЛаб',
        icon: winelabIcon,
        info: 'ВинЛаб',
      },
    ],
  },
  {
    title: 'Подписка на сервисы',
    id: uuidv4(),
    icon: servicesSubscribeIcon,
    content: [
      {
        id: uuidv4(),
        title: 'VK музыка бесплатно',
        icon: vkMusicIcon,
        info: 'VK музыка бесплатно',
      },
      {
        id: uuidv4(),
        title: 'Okko бесплатная подписка',
        icon: okkoIcon,
        info: 'Okko бесплатная подписка',
      },
      {
        id: uuidv4(),
        title: 'Яндекс 360',
        icon: yandex360Icon,
        info: 'Яндекс 360',
      },
      {
        id: uuidv4(),
        title: 'Premier бесплатная подписка',
        icon: premierIcon,
        info: 'Premier бесплатная подписка',
      },
      {
        id: uuidv4(),
        title: 'Start бесплатная подписка',
        icon: startIcon,
        info: 'Start бесплатная подписка',
      },
      {
        id: uuidv4(),
        title: 'Яндекс Маркет',
        icon: yandexMarketIcon,
        info: 'Яндекс Маркет',
      },
      {
        id: uuidv4(),
        title: 'Яндекс Афиша',
        icon: yandexAfishaIcon,
        info: 'Яндекс Афиша',
      },
    ],
  },
  {
    title: 'Халявные деньги',
    id: uuidv4(),
    icon: freebieMoneyIcon,
    content: [
      {
        id: uuidv4(),
        title: '3000 от Ренессанс',
        icon: renessansBankIcon,
        info: '3000 от Ренессанс',
      },
      {
        id: uuidv4(),
        title: '20 000 от Альфа Банка',
        icon: alfaBankIcon2,
        info: '20 000 от Альфа Банка',
      },
      {
        id: uuidv4(),
        title: '500 от Альфа Банка',
        icon: alfaBankIcon,
        info: '500 от Альфа Банка',
      },
      {
        id: uuidv4(),
        title: '1000 от МТС',
        icon: mtsIcon,
        info: '1000 от МТС',
      },
      {
        id: uuidv4(),
        title: '2023 от Открытия',
        icon: otkritieBankIcon,
        info: '2023 от Открытия',
      },
    ],
  },
  {
    title: 'Деньги без %',
    id: uuidv4(),
    icon: moneyWithoutPercentIcon,
    content: [
      {
        id: uuidv4(),
        title: 'Lime',
        icon: limeIcon,
        info: 'Lime',
      },
      {
        id: uuidv4(),
        title: 'MoneyMan',
        icon: moneyManIcon,
        info: 'MoneyMan',
      },
      {
        id: uuidv4(),
        title: 'Belka',
        icon: belkaIcon,
        info: 'Belka',
      },
      {
        id: uuidv4(),
        title: 'Max',
        icon: maxIcon,
        info: 'Max',
      },
    ],
  },
];
