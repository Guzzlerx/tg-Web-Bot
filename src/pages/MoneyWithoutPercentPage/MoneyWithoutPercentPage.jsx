import { v4 as uuidv4 } from 'uuid';

import Header from '../../components/Header/Header';
import CustomBackButton from '../../components/UI/CustomBackButton/CustomBackButton';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

import { freebieButton } from '../../constants/buttons';

const MoneyWithoutPercentPage = () => {
  return (
    <>
      <Header />
      <div className="btn-container">
        <CustomBackButton />
        {freebieButton[3].content.map((btn) => (
          <CustomButton
            title={btn.title}
            icon={btn.icon}
            color={btn.color}
            navLink={btn.navLink}
            key={uuidv4()}
          />
        ))}
      </div>
    </>
  );
};

export default MoneyWithoutPercentPage;
