import { LOADING } from "../action";

const initialState = {
    content : false
}


const loading = (state = initialState, action) => {
    switch (action.type) {

        case LOADING:
            
            return {
                ...state,

                content : action.payload
            } 

    
        default:
            return state;
    }
}

export default loading;