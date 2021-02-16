export const addItem = (itemObj) => {

    return {
        type: 'ADD_Item',
        data: itemObj
    }
};

export const removeItem = (listItem) => {

    console.log('inside of remove item action');
    return {
        type: 'REMOVE_ITEM',
        data: listItem
    }

};