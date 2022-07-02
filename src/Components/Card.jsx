import "./Card.css";
import loca from "../Assets/loca.png";
import mai from "../Assets/mai.png";
import pho from "../Assets/pho.png";

const Card = (props) => {
  const {
    picture: { medium },
    name: { title, first, last },
    email,
    cell,
    location: { city, country },
    dob: { age },
    registered: { date }
  } = props;

  return (
    <div className="container">
      <div className="card-header">
        <img className="pic" src={medium} alt="" />
        <h4 className="name">
          {title} {first} {last}
        </h4>
      </div>

      <div className="user-info">

        <div className="card-icons">
          <img src={mai} alt="mail-icon" />
          <img src={pho} alt="phone-icon" />
          <img src={loca} alt="location-icon" />

        </div>

        <div className="card-info">
          <p className="email">{email}</p>
          <p className="cell">{cell}</p>
          <p className="location">
            {city} - {country}
          </p>
        </div>
      </div>

      <div className="footer-info">
        <p className="age">Age : {age}</p>
        <p className="date">Registere Date : {date.substr(0,10)}</p>
      </div>

    </div>
  );
};

export default Card;
