import './propertyList.css';

const propertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://cdn.pixabay.com/photo/2015/08/29/13/26/bed-913051__480.jpg" alt="single-bedroom" className='pListImg' />
            <div className="pListTitles">
                <h1>Single bed room</h1>
                <h2>secure a single bed room apartment</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cdn.pixabay.com/photo/2015/02/24/02/01/room-647011__480.jpg" alt="single-bedroom" className='pListImg' />
            <div className="pListTitles">
                <h1>Double bed-room</h1>
                <h2>secure a double-bed room apartment</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515__480.jpg" alt="single-bedroom" className='pListImg' />
            <div className="pListTitles">
                <h1>Luxurious bedroom</h1>
                <h2>secure a bedroom apartment</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cdn.pixabay.com/photo/2020/02/01/06/12/living-room-4809587__480.jpg" alt="single-bedroom" className='pListImg' />
            <div className="pListTitles">
                <h1>Bedroom + couch room</h1>
                <h2>secure a 1 bedroom + couch apartment</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cdn.pixabay.com/photo/2021/10/06/15/05/bedroom-6686061__480.jpg" alt="single-bedroom" className='pListImg' />
            <div className="pListTitles">
                <h1>Spacious single room</h1>
                <h2>secure a spacious apartment</h2>
            </div>
        </div>
    </div>
  )
}

export default propertyList