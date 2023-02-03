import Navbar from '../../components/navbar/Navbar';
import './home.css';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import MeetingHalls from '../../components/meetingHalls/MeetingHalls';
import MailList from '../../components/mailList/MailList';

const Home = () => {
  return (
    <div>
      <Navbar/>
       <Header/>
       <div className="homeContainer">
       <h1 className="homeTitle">Browse by property type</h1>
        <Featured/>
        <PropertyList/>
        <h1 className="homeTitle">Meeting Halls</h1>
        <MeetingHalls/>
        <MailList/>
       </div>
    </div>
  )
}

export default Home