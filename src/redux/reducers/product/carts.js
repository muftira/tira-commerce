import { ADD_CARTS, GET_CARTS, DELETE_CARTS } from "../../action";

const initialState = {
    addCartResult : false,
    addCartLoading : false,
    addCartError : false,

    getCartResult : false,
    getCartLoading : false,
    getCartError : false,
}

export const addCartsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARTS:
            return {
                ...state,
                addCartResult : action.payload.data,
                addCartLoading : action.payload.loading,
                addCartError : action.payload.error
            }
    
        default:
            return state
    }
}
export const getCartsReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARTS:
            return {
                ...state,
                getCartResult : action.payload.data,
                getTotalPrice  : action.payload.reduce,
                getCartLoading : action.payload.loading,
                getCartError : action.payload.error
            }
    
        default:
            return state
    }
}
export const deleteCartsReducers = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CARTS:
            return {
                ...state,
                getCartResult : action.payload.data,
                getCartLoading : action.payload.loading,
                getCartError : action.payload.error
            }
    
        default:
            return state
    }
}