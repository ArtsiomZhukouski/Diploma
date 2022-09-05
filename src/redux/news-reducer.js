const GET_NEWS = 'GET-NEWS';

let initialState = {
    
};

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_NEWS : {
            return {
                ...state,
                news: state.news.map(m => {
                    return m;
                })
            }
        }
        default:
            return state;
    }
}

export const setNewsAC = (news) => ({type: GET_NEWS, news})

export default newsReducer;