import './Card.css'


const CardPostSection = () => {
    return (
        <>
            <div className='card-style'>
                <div className='image-style'>
                    <img src='./images/ContentImage.jpg' alt="" />
                </div>
                <div className='content-style'>
                    <p className='content-date'>April 20, 2021</p>
                    Astronauts prep for new solar arrays on nearly seven-hour spacewalk
                </div>
            </div>
        </>
    )
}

export default CardPostSection;