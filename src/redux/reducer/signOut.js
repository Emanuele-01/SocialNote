import { SING_OUT } from "../action";

const initialState = {
    content : false
}


const singOut = (state = initialState, action) => {
    switch (action.type) {

        case SING_OUT:
            
            return {
                ...state,

                content : action.payload
            } 

    
        default:
            return state;
    }
}

export default singOut;