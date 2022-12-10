import { Route, Navigate, Routes } from 'react-router-dom';

import PATH from '../constants/path.js';

import MainPage from '../pages/MainPage/MainPage.jsx';
import Error404 from '../pages/Error404/Error404.jsx';
import FreebieRoute from './routes/FreebieRoute.jsx';

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/freebie" element={<FreebieRoute />} />
      <Route path={PATH.error404} element={<Error404 />} />
      <Route path="*" element={<Navigate to={PATH.error404} />} />
    </Routes>
  );
};

export default RouteList;
