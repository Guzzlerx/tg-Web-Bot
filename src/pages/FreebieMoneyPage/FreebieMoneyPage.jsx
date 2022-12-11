import { v4 as uuidv4 } from 'uuid';

import Header from '../../components/Header/Header';
import CustomBackButton from '../../components/UI/CustomBackButton/CustomBackButton';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

import { freebieButton } from '../../constants/buttons';

const FreebieMoneyPage = () => {
  return (
    <>
      <Header />
      <div className="btn-container">
        <CustomBackButton />
        {freebieButton[2].content.map((btn) => (
          <CustomButton
            title={btn.title}
            icon={btn.title}
            key={uuidv4()}
            color={btn.color}
            navLink={btn.navLink}
            {...btn}
          />
        ))}
      </div>
    </>
  );
};

export default FreebieMoneyPage;
