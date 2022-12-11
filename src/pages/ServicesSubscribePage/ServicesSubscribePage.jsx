import { v4 as uuidv4 } from 'uuid';

import Header from '../../components/Header/Header';
import CustomBackButton from '../../components/UI/CustomBackButton/CustomBackButton';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

import { freebieButton } from '../../constants/buttons';

const ServicesSubscribePage = () => {
  console.log(freebieButton, 'asd');
  return (
    <>
      <Header />
      <div className="btn-container">
        <CustomBackButton />
        {freebieButton[1].content.map((btn) => (
          <CustomButton
            key={uuidv4()}
            title={btn.title}
            icon={btn.icon}
            color={btn.color}
            navLink={btn.navLink}
            {...btn}
          />
        ))}
      </div>
    </>
  );
};

export default ServicesSubscribePage;
