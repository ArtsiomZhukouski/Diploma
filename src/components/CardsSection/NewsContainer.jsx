import { setNewsAC } from "../../redux/news-reducer"
import { connect } from "react-redux"
// import { setNewsAC } from "../../redux/news-reducer"
import CardPostSection from "../Card/Card"


let mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setNews: (news) => {
            dispatch(setNewsAC(news));
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (CardPostSection);