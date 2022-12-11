export function addGoodsToCard (id) {
    return{
        type: "ADD_GOOD_TO_CART",
        payload : {
            id: id
        }
    };
}