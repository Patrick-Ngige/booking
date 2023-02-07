import './mailList.css'

const MailList = () => {
  return (
    <div className='mail'>
        <h1 className='mailTitle'> Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll keep you updated with our best deals</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='enter your email '/>
            <button>Subscribe</button>
        </div>
        <div className="cw">Copywrite © 2023 5-Star booking. </div>
</div>
  );
}

export default MailList