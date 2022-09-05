// import axios from 'axios';
// import { setNewsAC } from '../../redux/news-reducer';
// import { news } from '../CardsSection/CardsSection';
import NewsContainer from '../CardsSection/NewsContainer';
import './Card.css';

// interface News  {
//     id: number;
//     title: string;
//     url: string;
//     imageUrl: string;
//     newsSite: string;
//     summary: string;
//     publishedAt: string;
//     updatedAt: string;
//     featured: boolean
// };

const CardPostSection = (props) => {
    
    return (
        <>
            <div className='card-style'>
                <div className='image-style'>
                    <img src='./images/ContentImage.jpg' alt="" />
                </div>
                <div className='content-style'>
                    <p className='content-date'>April 20, 2021</p>
                    {NewsContainer}
                   
                </div>
            </div>
        </>
    )
}

export default CardPostSection;
