import { combineReducers } from "redux";
import ProductReducers from './product/detail'
import {JacketsReducers, ShirtsReducers, PantsReducers, NewArrivalJacketReducers, NewArrivalShirtReducers, NewArrivalPantReducers} from "./product/category";
import { addCartsReducers, getCartsReducers } from "./product/carts";
import { listReducers } from "./product/listProduct";

export default combineReducers({
    ProductReducers, JacketsReducers, ShirtsReducers, PantsReducers, NewArrivalJacketReducers, NewArrivalShirtReducers, NewArrivalPantReducers, addCartsReducers, getCartsReducers, listReducers
})