
import './Card.css';

const Card = (props) => {
 
    const {
        picture: { medium },
        name: { title, first, last },
        email,
        cell,
        location: { city, country },
        dob: { age },
        registered: { date },
      } = props;


  return (
    <div className='container'>

        <div className='card-left'>
            <ul>
                <li className='img'>{medium}</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>

        <div className='card-right'>
            <p className='name' >{title} {first} {last}</p>
            <p className='email'>{email}</p>
            <p className='cell'>{cell}</p>
            <p className='location'>{city} - {country}</p>

        </div>

        
        

    </div>
  )
}

export default Card;