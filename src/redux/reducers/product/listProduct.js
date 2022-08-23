import { GET_PRODUCT } from "../../action";

const initialState = {
    product : []
}

export const listReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                list : action.payload.data
            }
    
        default:
            return state ;
    }
}