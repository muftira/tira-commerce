import { DETAIL_PRODUCT } from "../../action";

const initialState = {
 list : []
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL_PRODUCT:
            return {
                list : [action.payload]
            }
        default : 
        return state
    
        
    }
} 

export default data