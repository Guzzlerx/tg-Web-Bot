import { Route, Navigate, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage.jsx';
import Error404 from '../pages/Error404/Error404.jsx';
import FreebiePage from '../pages/FreebiePage/FreebiePage.jsx';

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/freebie/" element={<FreebiePage />} />
      <Route path="/freebie/food_and_delivery" element={<h1>asdv</h1>} />
      <Route path="/error404" element={<Error404 />} />
      <Route path="*" element={<Navigate to={'error404'} />} />
    </Routes>
  );
};

export default RouteList;
