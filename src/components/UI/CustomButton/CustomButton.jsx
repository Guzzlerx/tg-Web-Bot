import { Link } from 'react-router-dom';

import './CustomButton.css';

const CustomButton = ({ title, icon, color, navLink }) => {
  return (
    <Link
      to={navLink}
      style={{ backgroundColor: color }}
      className="button button_type_default"
    >
      <h3 className="title">{title}</h3>
      <img className="icon" src={icon} alt={`Иконка ${title}`} />
    </Link>
  );
};

export default CustomButton;
