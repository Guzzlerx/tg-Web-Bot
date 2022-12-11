import { Link } from 'react-router-dom';

import './CustomButton.css';

const CustomButton = ({ title, icon, color, navLink }) => {
  return (
    <Link
      to={navLink}
      style={{ backgroundColor: color }}
      className="custom-button"
    >
      <h3 className="custom-button__title">{title}</h3>
      <img className="custom-button_icon" src={icon} alt={`Иконка ${title}`} />
    </Link>
  );
};

export default CustomButton;
