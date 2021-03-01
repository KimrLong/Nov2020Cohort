//this is our store
//product: id, productName, price
export const addProduct = (product) => {

    return {
        type: "ADD_PRODUCT",
        data: product
    }
}

//product should have unique id
export const deleteProduct = (product) =>{

    return {
        type: "DELETE_PRODUCT",
        data: product
    }
}