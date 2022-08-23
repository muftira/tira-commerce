import { getCategory, postCart, getCart,deleteCart, checkIdCart, putCart,getApi } from "../utils/axios"; 

export const GET_PRODUCT = 'GET_PRODUCT'
export const DETAIL_PRODUCT = 'DETAIL_PRODUCT'
export const JACKETS_PRODUCT = 'JACKETS_PRODUCT'
export const SHIRTS_PRODUCT = 'SHIRTS_PRODUCT'
export const PANTS_PRODUCT = 'PANTS_PRODUCT'
export const NEWARRIVAL__JACKETS = 'NEWARRIVAL_JACKETS'
export const NEWARRIVAL__SHIRTS = 'NEWARRIVAL_SHIRTS'
export const NEWARRIVAL__PANTS = 'NEWARRIVAL_PANTS'
export const ADD_CARTS = 'ADD_CARTS'
export const GET_CARTS = 'GET_CARTS'
export const DELETE_CARTS = 'DELETE_CARTS'
export const PUT_CARTS = 'PUT_CARTS'

export const getProduct = (items) => {
    return(dispatch) => {
        //loading
        dispatch({
            type: GET_PRODUCT,
            payload: {
                loading : true,
                data : false,
                error : false
            } 
        })

        getApi()
        .then(res => {
            dispatch({
                type: GET_PRODUCT,
                payload: {
                    loading : false,
                    data : res.data,
                    error : false
                } 
            }) 
        })
        .catch(error => {
            dispatch({
                type: GET_PRODUCT,
                payload: {
                    loading : false,
                    data : false,
                    error : console.log("GAGAL", error)
                } 
            })
        })
    }
}
export const detailProduct = (items) => {
    return(dispatch) => {
        dispatch({
            type: DETAIL_PRODUCT,
            payload: items 
        })
    }
}
export const jacketsProduct = (items) => {
    return(dispatch) => {
        dispatch({
            type: JACKETS_PRODUCT,
            payload: items 
        })
    }
}
export const shirtsProduct = (items) => {
    return(dispatch) => {
        dispatch({
            type: SHIRTS_PRODUCT,
            payload: items 
        })
    }
}
export const pantsProduct = (items) => {
    return(dispatch) => {
        dispatch({
            type: PANTS_PRODUCT,
            payload: items 
        })
    }
}
// export const newArrivalJackets = (items) => {
//     return(dispatch) => {

//         //loading
//         // dispatch({
//         //     type: NEWARRIVAL__JACKETS,
//         //     payload: {
//         //         loading : true,
//         //         data : false,
//         //         error : false
//         //     }
//         // })
        

//         //get_API_jackets
//         const data = 'Jackets'
//         getCategory(data)
//         .then(res => {
//             dispatch({
//                 type: NEWARRIVAL__JACKETS,
//                 payload: {
//                     loading : false,
//                     data : res.data.slice(-1)[0],
//                     error : false
//                 }
//             })
//         })
//         .catch(error => {
//             dispatch({
//                 type: NEWARRIVAL__JACKETS,
//                 payload: {
//                     loading : false,
//                     data : false,
//                     error : console.log("GAGAL",error)
//                 }
//             })
//         })

        
//     }
// }
// export const newArirvalShirts = (items) => {
//     return(dispatch) => {

//         //loading
//         // dispatch({
//         //     type: NEWARRIVAL__SHIRTS,
//         //     payload: {
//         //         loading : true,
//         //         data : false,
//         //         error : false
//         //     }
//         // })

//         //get_API_shirts
//         const data2 = 'Shirts'
//         getCategory(data2)
//         .then(res => {
//             dispatch({
//                 type: NEWARRIVAL__SHIRTS,
//                 payload: {
//                     loading : false,
//                     data : res.data.slice(-1)[0],
//                     error : false
//                 }
//             })
//         })
//         .catch(error => {
//             dispatch({
//                 type: NEWARRIVAL__SHIRTS,
//                 payload: {
//                     loading : false,
//                     data : false,
//                     error : console.log('GAGAL', error)
//                 }
//             })
//         })
//     }
// }
// export const newArirvalPants = (items) => {
//     return(dispatch) => {

//         //loading
//         // dispatch({
//         //     type: NEWARRIVAL__PANTS,
//         //     payload: {
//         //         loading : true,
//         //         data : false,
//         //         error : false
//         //     }
//         // })

//         //get_API_shirts
//         const data3 = 'Pants'
//         getCategory(data3)
//         .then(res => {
//             dispatch({
//                 type: NEWARRIVAL__PANTS,
//                 payload: {
//                     loading : false,
//                     data : res.data.slice(-1)[0],
//                     error : false
//                 }
//             })
//         })
//         .catch(error => {
//             dispatch({
//                 type: NEWARRIVAL__PANTS,
//                 payload: {
//                     loading : false,
//                     data : false,
//                     error : console.log('GAGAL', error)
//                 }
//             })
//         })
//     }
// }
export const newArirvalProducts = (items) => {
    return(dispatch) => {

        //get_API_jackets
        const data = 'Jackets'
        getCategory(data)
        .then(res => {
            dispatch({
                type: NEWARRIVAL__JACKETS,
                payload: {
                    loading : false,
                    data : res.data.slice(-1)[0],
                    error : false
                }
            })
        })
        .catch(error => {
            dispatch({
                type: NEWARRIVAL__JACKETS,
                payload: {
                    loading : false,
                    data : false,
                    error : console.log("GAGAL",error)
                }
            })
        })
        //get_API_shirts
        const data2 = 'Shirts'
        getCategory(data2)
        .then(res => {
            dispatch({
                type: NEWARRIVAL__SHIRTS,
                payload: {
                    loading : false,
                    data : res.data.slice(-1)[0],
                    error : false
                }
            })
        })
        .catch(error => {
            dispatch({
                type: NEWARRIVAL__SHIRTS,
                payload: {
                    loading : false,
                    data : false,
                    error : console.log('GAGAL', error)
                }
            })
        })
        //get_API_shirts
        const data3 = 'Pants'
        getCategory(data3)
        .then(res => {
            dispatch({
                type: NEWARRIVAL__PANTS,
                payload: {
                    loading : false,
                    data : res.data.slice(-1)[0],
                    error : false
                }
            })
        })
        .catch(error => {
            dispatch({
                type: NEWARRIVAL__PANTS,
                payload: {
                    loading : false,
                    data : false,
                    error : console.log('GAGAL', error)
                }
            })
        })
    }
}

export const addCarts = (items, color, size, pictUrl) => {
    return(dispatch) => {

        //loading
        dispatch({
            type: ADD_CARTS,
            payload: {
                loading : true,
                data : false,
                error : false
            }
        })
        dispatch({
            type: PUT_CARTS,
            payload: {
                loading : true,
                data : false,
                error : false
            }
        })

        // check carts
        checkIdCart(items[0], color, size)
        .then(res => {
            if(res.data.length === 0) {
                const cart = {
                    total : 1,
                    selected_size : size,
                    selected_color : color,
                    pict : pictUrl,
                    name : items[0].name,
                    total_price : items[0].price, 
                    product : items[0]
                  }
                  postCart(cart)
                  .then(res => {
                    dispatch({
                        type: ADD_CARTS,
                        payload: {
                            loading : false,
                            data : res.data,
                            error : false
                        }
                    })
                  })
                  .catch(error => {
                    dispatch({
                        type: ADD_CARTS,
                        payload: {
                            loading : true,
                            data : false,
                            error : console.log("GAGAL", error)
                        }
                    })
                  })
            }
            else {
                
                const cart2 = {
                    total : res.data[0].total + 1,
                    selected_size : size,
                    selected_color : color,
                    pict : pictUrl,
                    name : items[0].name,
                    total_price : res.data[0].total_price + items[0].price, 
                    product : items[0]
                  }

                  putCart(res.data[0], cart2)
                  .then( response => {
                    dispatch({
                        type: PUT_CARTS,
                        payload: {
                            loading : false,
                            data : response.data,
                            error : false
                        }
                    })
                  })
                  .catch(error => {
                    dispatch({
                        type: PUT_CARTS,
                        payload: {
                            loading : false,
                            data : false,
                            error : console.log("GAGAL", error)
                        }
                    }) 
                  })
            }
        })
        .catch(error => dispatch({
            type: ADD_CARTS,
            payload: {
                loading : false,
                data : false,
                error : console.log("GAGAL", error)
            }
        }) )
    }
}
export const getShoppingCarts = () => {
    return(dispatch) => {

        //loading
        dispatch({
            type: GET_CARTS,
            payload: {
                loading : true,
                data : false,
                error : false
            }
        })

        //add carts'
        getCart()
        .then(res => {
            const getSum = (acc, num) => {
                return acc + num.total_price
            }
            dispatch({
                type: GET_CARTS,
                payload: {
                    loading : false,
                    data : res.data,
                    reduce : res.data.reduce(getSum, 0),
                    error : false
                }
            })
        })
        .catch(error => {
            dispatch({
                type: GET_CARTS,
                payload: {
                    loading : false,
                    data : false,
                    error : console.log('GAGAL', error)
                }
            })
        })
    }
}
export const deleteCarts = (id) => {
    return(dispatch) => {

        //loading
        dispatch({
            type: DELETE_CARTS,
            payload: {
                loading : true,
                data : false,
                error : false
            }
        })

        //add carts'
        deleteCart(id)
        .then(res => {
            dispatch({
                type: DELETE_CARTS,
                payload: {
                    loading : false,
                    data : res.data,
                    error : false
                }
            })
        })
        .catch(error => {
            dispatch({
                type: DELETE_CARTS,
                payload: {
                    loading : false,
                    data : false,
                    error : console.log('GAGAL', error)
                }
            })
        })
    }
}
export const incrementCarts = (items, color, size, pictUrl) => {
    return(dispatch) => {

        //loading
        dispatch({
            type: PUT_CARTS,
            payload: {
                loading : true,
                data : false,
                error : false
            }
        })

        //increment carts'
        const cart = {
            total : items.total + 1,
            selected_size : size,
            selected_color : color,
            pict : pictUrl,
            name : items.product.name,
            total_price : items.total_price + items.product.price , 
            product : items.product
          }
        putCart(items, cart)
        .then(res => {
            dispatch({
                type: PUT_CARTS,
                payload: {
                    loading : false,
                    data : res.data,
                    error : false
                }
            })
        })
        .catch(error => {
            dispatch({
                type: PUT_CARTS,
                payload: {
                    loading : false,
                    data : false,
                    error : console.log('GAGAL', error)
                }
            })
        })
    }
}
export const decrementCarts = (items, color, size, pictUrl) => {
    return(dispatch) => {

        //loading
        dispatch({
            type: PUT_CARTS,
            payload: {
                loading : true,
                data : false,
                error : false
            }
        })

        //decrement carts'
        const cart = {
            total : items.total - 1,
            selected_size : size,
            selected_color : color,
            pict : pictUrl,
            name : items.product.name,
            total_price : items.total_price - items.product.price , 
            product : items.product
          }
        putCart(items, cart)
        .then(res => {
            dispatch({
                type: PUT_CARTS,
                payload: {
                    loading : false,
                    data : res.data,
                    error : false
                }
            })
        })
        .catch(error => {
            dispatch({
                type: PUT_CARTS,
                payload: {
                    loading : false,
                    data : false,
                    error : console.log('GAGAL', error)
                }
            })
        })
    }
}