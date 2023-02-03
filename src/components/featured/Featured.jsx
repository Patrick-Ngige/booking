import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2017/08/10/07/32/hotel-room-2619509__480.jpg" alt="apartment-1.jpg" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Bedroom</h1>
          <h2>5-star properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2019/12/26/18/41/lamp-4720975__480.jpg" alt="apartment-1.jpg" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Sitting room</h1>
          <h2>5-star properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cdn.pixabay.com/photo/2017/06/13/22/41/hotel-2400364__480.jpg" alt="apartment-1.jpg" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Working desk</h1>
          <h2>5-star properties</h2>
        </div>
      </div>
     
    </div>
  );
};

export default Featured;
