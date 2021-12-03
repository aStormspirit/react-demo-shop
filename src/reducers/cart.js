const initialState = {
    items: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'REMOVE_CART':
            return {
                ...state,
                items: state.items.filter(e => e.id !== action.payload)
            }
        default:
            return state
    }
}