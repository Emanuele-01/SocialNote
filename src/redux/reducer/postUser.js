import { POST_USER } from "../action";

const initialState = {
    content : null
}


const postUser = (state = initialState, action) => {
    switch (action.type) {

        case POST_USER:
            
            return {
                ...state,

                content : action.payload
            } 

    
        default:
            return state;
    }
}

export default postUser;