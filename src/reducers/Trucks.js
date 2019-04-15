export const trucks = (state = [], action) => {
    switch(action.type){
        case "SET_TRUCK":
            return action.trucks;
        default:
            return state;
    }
}