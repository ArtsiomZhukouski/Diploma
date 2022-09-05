import axios from 'axios';
import CardPostSection from '../Card/Card';
import './CardsSection.css';


export let news = (props) => {
    if (props.news.lenght === 0) {
        axios.get('https://api.spaceflightnewsapi.net/v3/articles').then(response => {
            props.setNews(response.data.id)
        });
    }
    // return (
    //     // <div>
    //     //     {
    //     //         props.news.map(n => <div key = {n.id}>)
    //     //     }
    //     // </div>
    // )
}

 const CardsSection = () => {
    return (
        <>
        <div className='cards-section-style'>
            <CardPostSection />
        </div>
        </>
    )
}

export default CardsSection;