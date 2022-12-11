import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import { freebieButton } from '../../constants/buttons';

import Header from '../../components/Header/Header';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

import './FreebiePage.css';
import CustomBackButton from '../../components/UI/CustomBackButton/CustomBackButton';

const FreebiePage = () => {
  console.log(freebieButton);
  return (
    <>
      <Header isMainPage={false} />
      <div className="btn-container">
        <CustomBackButton />
        {freebieButton.map((btn) => (
          <CustomButton
            key={uuidv4()}
            title={btn.title}
            icon={btn.icon}
            color={btn.color}
            link={btn.navLink}
            {...btn}
          />
        ))}
      </div>
    </>
  );
};

export default FreebiePage;
