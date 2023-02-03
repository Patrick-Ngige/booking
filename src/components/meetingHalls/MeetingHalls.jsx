import './meetingHalls.css'

const MeetingHalls = () => {
  return (
    <div className='mh'>
      <div className="mhItem">
      <img src="https://cdn.pixabay.com/photo/2015/10/17/09/14/meeting-room-992298__480.jpg" alt="meeting hall" className="mhImg" />
      <span className="mhName">Mt. Elgon Hall</span>
      <span className="mhCapacity"> 120 people</span>
      <span className="mhPrice"> $20</span>
      <div className="mhRating">
        <button>7.3</button>
        <span>EXcellent</span>
      </div>
      </div>
      <div className="mhItem">
      <img src="https://cdn.pixabay.com/photo/2015/10/17/09/14/meeting-room-992298__480.jpg" alt="meeting hall" className="mhImg" />
      <span className="mhName">Mt. Elgon Hall</span>
      <span className="mhCapacity"> 120 people</span>
      <span className="mhPrice"> $25</span>
      <div className="mhRating">
        <button>7.3</button>
        <span>EXcellent</span>
      </div>
      </div>
      <div className="mhItem">
      <img src="https://cdn.pixabay.com/photo/2015/10/17/09/14/meeting-room-992298__480.jpg" alt="meeting hall" className="mhImg" />
      <span className="mhName">Mt. Elgon Hall</span>
      <span className="mhCapacity"> 120 people</span>
      <span className="mhPrice"> $50</span>
      <div className="mhRating">
        <button>7.3</button>
        <span>EXcellent</span>
      </div>
      </div>
      <div className="mhItem">
      <img src="https://cdn.pixabay.com/photo/2015/10/17/09/14/meeting-room-992298__480.jpg" alt="meeting hall" className="mhImg" />
      <span className="mhName">Mt. Elgon Hall</span>
      <span className="mhCapacity"> 120 people</span>
      <span className="mhPrice"> $75</span>
      <div className="mhRating">
        <button>7.3</button>
        <span>EXcellent</span>
      </div>
      </div>
    </div>
  );
};

export default MeetingHalls