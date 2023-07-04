import { PRIVATE_PROFILE} from "../action";


const initialState = {
    content : null
}


const privateProfileRedux = (state = initialState, action) => {
    switch (action.type) {

        case PRIVATE_PROFILE:
            
            return {
                ...state,

                content : action.payload
            } 

    
        default:
            return state;
    }
}

export default privateProfileRedux;