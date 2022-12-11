import { Route, Navigate, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage.jsx';
import Error404 from '../pages/Error404/Error404.jsx';
import FreebiePage from '../pages/FreebiePage/FreebiePage.jsx';
import FoodAndDeliveryPage from '../pages/FoodAndDeliveryPage/FoodAndDeliveryPage.jsx';
import FreebieMoneyPage from '../pages/FreebieMoneyPage/FreebieMoneyPage.jsx';
import ServicesSubscribePage from '../pages/ServicesSubscribePage/ServicesSubscribePage.jsx';
import MoneyWithoutPercentPage from '../pages/MoneyWithoutPercentPage/MoneyWithoutPercentPage.jsx';
import PostPage from '../pages/PostPage/PostPage';

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/freebie/" element={<FreebiePage />} />
      <Route
        path="/freebie/food_and_delivery"
        element={<FoodAndDeliveryPage />}
      />
      <Route
        path="/freebie/food_and_delivery/burger_king"
        element={<PostPage />}
      />
      <Route
        path="/freebie/food_and_delivery/tanuki_family"
        element={<PostPage />}
      />
      <Route
        path="/freebie/food_and_delivery/your_pizza"
        element={<PostPage />}
      />
      <Route path="/freebie/food_and_delivery/magnit" element={<PostPage />} />
      <Route
        path="/freebie/food_and_delivery/mnogo_lososya"
        element={<PostPage />}
      />
      <Route path="/freebie/food_and_delivery/flor2u" element={<PostPage />} />
      <Route path="/freebie/food_and_delivery/globus" element={<PostPage />} />
      <Route
        path="/freebie/food_and_delivery/sber_market"
        element={<PostPage />}
      />
      <Route
        path="/freebie/food_and_delivery/pyaterochka"
        element={<PostPage />}
      />
      <Route path="/freebie/food_and_delivery/winelab" element={<PostPage />} />
      <Route
        path="/freebie/services_subscribe"
        element={<ServicesSubscribePage />}
      />
      <Route
        path="/freebie/services_subscribe/vk_music"
        element={<PostPage />}
      />
      <Route path="/freebie/services_subscribe/okko" element={<PostPage />} />
      <Route
        path="/freebie/services_subscribe/yandex_360"
        element={<PostPage />}
      />
      <Route
        path="/freebie/services_subscribe/premier"
        element={<PostPage />}
      />
      <Route path="/freebie/services_subscribe/start" element={<PostPage />} />
      <Route
        path="/freebie/services_subscribe/yandex_market"
        element={<PostPage />}
      />
      <Route
        path="/freebie/services_subscribe/yandex_afisha"
        element={<PostPage />}
      />
      <Route path="/freebie/freebie_money" element={<FreebieMoneyPage />} />
      <Route
        path="/freebie/freebie_money/renessans_bank"
        element={<PostPage />}
      />
      <Route path="/freebie/freebie_money/alfa_bank" element={<PostPage />} />
      <Route path="/freebie/freebie_money/alfa2_bank" element={<PostPage />} />
      <Route path="/freebie/freebie_money/mts" element={<PostPage />} />
      <Route path="/freebie/freebie_money/open_bank" element={<PostPage />} />
      <Route
        path="/freebie/money_without_percent"
        element={<MoneyWithoutPercentPage />}
      />
      <Route
        path="/freebie/money_without_percent/lime"
        element={<PostPage />}
      />
      <Route
        path="/freebie/money_without_percent/money_man"
        element={<PostPage />}
      />
      <Route
        path="/freebie/money_without_percent/belka"
        element={<PostPage />}
      />
      <Route path="/freebie/money_without_percent/max" element={<PostPage />} />
      <Route path="/error404" element={<Error404 />} />
      <Route path="*" element={<Navigate to={'error404'} />} />
    </Routes>
  );
};

export default RouteList;
