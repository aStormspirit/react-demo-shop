export const addCart = (obj) => ({
    type: 'ADD_CART',
    payload: obj
})

export const remCart = (id) => ({
    type: 'REMOVE_CART',
    payload: id
})