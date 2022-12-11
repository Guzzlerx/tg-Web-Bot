import { useNavigate } from 'react-router-dom';

import backArrow from '../../../assets/backArrow.svg';

import './CustomBackButton.css';

const CustomBackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="button button_type_back" onClick={() => navigate(-1)}>
      <h3 className="button__title">Назад</h3>
      <img className="button_icon" src={backArrow} alt="Стрелка назад" />
    </button>
  );
};

export default CustomBackButton;
