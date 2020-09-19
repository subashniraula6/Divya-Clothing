export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === itemToAdd.id
    })

    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === itemToAdd.id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            } :
                cartItem
        })
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }]

}

export const removeItem = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find((cartItem) => {
        return cartItem.id === itemToRemove.id
    })
    
    if(existingItem.quantity === 1){
        return cartItems.filter((cartItem) => {
            return cartItem.id !== existingItem.id
        }) 
    }

    return cartItems.map((cartItem) => { ///OOps if forgot leftmost 'return' here :( and used .filter instead of .map 
        return (cartItem.id === itemToRemove.id) ?  
            {...cartItem, quantity : (cartItem.quantity - 1) }
        :        
        cartItem;
    })
}