import './Card.css'
import image from './images/ContentImage.jpg'

const CardPostSection = () => {
    return (
        <>
            <div className='card-style'>
                <div className='image-style'>
                    {/* <img src={image} alt="" /> */}
                </div>
                <div className='content-style'>
                    Astronauts prep for new solar arrays on nearly seven-hour spacewalk
                </div>
            </div>
        </>
    )
}

export default CardPostSection;