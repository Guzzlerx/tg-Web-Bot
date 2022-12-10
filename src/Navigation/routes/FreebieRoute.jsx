import { Route, Routes } from 'react-router-dom';

import FreebiePage from '../../pages/FreebiePage/FreebiePage';

const FreebieRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<FreebiePage />}></Route>
    </Routes>
  );
};

export default FreebieRoute;
