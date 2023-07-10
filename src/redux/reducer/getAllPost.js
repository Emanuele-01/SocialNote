import { GET_ALL_POST } from "../action";

const initialState = {
    content : null
}


const getAllPost = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_POST:
            
            return {
                ...state,

                content : action.payload
            } 

    
        default:
            return state;
    }
}

export default getAllPost;