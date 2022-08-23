import axios from "axios";

const base_url = 'https://tira-commerce-backend.herokuapp.com'

export const getApi = () => axios.get(base_url+'/product')
export const getCategory = (category) => axios.get(base_url+'/product?category.name='+category)
export const postCart = (cart) => axios.post(base_url+'/carts', cart)
export const getCart = () => axios.get(base_url+'/carts')
export const deleteCart = (id) => axios.delete(base_url+'/carts/'+id)
export const putCart = (item, product) => axios.put(base_url+'/carts/'+item.id, product)
export const checkIdCart = (data, color, size) => axios.get(base_url+'/carts?product.id='+ data.id+'&selected_color='+color+'&selected_size='+size)

