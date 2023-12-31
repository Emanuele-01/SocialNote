import { TOKEN_QUERY } from "../action";


const initialState = {
    content: {
        accessToken: ''
    }
}


const tokenRedux = (state = initialState, action) => {
    switch (action.type) {

        case TOKEN_QUERY:
            
            return {
                ...state,

                content : action.payload
            } 

    
        default:
            return state;
    }
}

export default tokenRedux;