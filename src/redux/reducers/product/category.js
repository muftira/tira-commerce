import { JACKETS_PRODUCT, SHIRTS_PRODUCT, PANTS_PRODUCT, NEWARRIVAL__JACKETS, NEWARRIVAL__SHIRTS, NEWARRIVAL__PANTS } from "../../action";

const initialState = {
 list : [],
 newJackets : {},
 newShirts : {},
 newPants : {}

}

export const JacketsReducers = (state = initialState, action) => {
    switch (action.type) {
        case JACKETS_PRODUCT:
            return {
                list : action.payload
            }
        default : 
        return state
    
        
    }
} 
export const ShirtsReducers = (state = initialState, action) => {
    switch (action.type) {
        case SHIRTS_PRODUCT:
            return {
                list : action.payload
            }
        default : 
        return state
    
        
    }
} 
export const PantsReducers = (state = initialState, action) => {
    switch (action.type) {
        case PANTS_PRODUCT:
            return {
                list : action.payload
            }
        default : 
        return state
    
        
    }
} 



// export const NewArrivalReducers = (state = initialState, action) => {
//     switch (action.type) {
//         case NEWARRIVAL__JACKETS:   
//             return {
//                 newJackets : action.payload.data
//             }
//         case NEWARRIVAL__SHIRTS:   
//             return {
//                 newShirts : action.payload.data
//             }
//         case NEWARRIVAL__PANTS:   
//             return {
//                 newPants : action.payload.data
//             }
    
//         default:
//             return state
//     }
// } 
export const NewArrivalJacketReducers = (state = initialState, action) => {
    switch (action.type) {
        case NEWARRIVAL__JACKETS:   
            return {
                newJackets : action.payload.data
            }
        default:
            return state
    }
} 
export const NewArrivalShirtReducers = (state = initialState, action) => {
    switch (action.type) {
        case NEWARRIVAL__SHIRTS:   
            return {
                newShirts : action.payload.data
            }
        default:
            return state
    }
} 
export const NewArrivalPantReducers = (state = initialState, action) => {
    switch (action.type) {
        case NEWARRIVAL__PANTS:   
            return {
                newPants : action.payload.data
            }
    
        default:
            return state
    }
} 


