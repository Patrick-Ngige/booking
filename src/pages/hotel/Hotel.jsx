import './hotel.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  const photos = [
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937__480.jpg"
    }
  ];
  return (
    <div>
      <Navbar/>
    <Header type="list"/>
    <div className="hotelContainer">
      <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}/> 
          <span className="sLocation">Elton St 125 New York</span>          
          <span className="hotelDistance">
            Excellent location - 500m from center.
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map(photo=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className='hotelImg' />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minutes walk from St. Floarian's Gate in Krakow, Tower Street Apartments has accomodations with air conditioning and free Wifi. The units come with hardwood floors and features a full equipped kitchenette with a microwave, a flatscreen Tv and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul 11 International Krakow-Balice, 16.1 km from the Tower Street Apartments, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>  
                (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
      </div>
    </div>
    </div>
  )
}

export default Hotel