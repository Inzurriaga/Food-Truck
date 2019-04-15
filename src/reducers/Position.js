export const position = (state = null, action) => {
    switch(action.type){
        case "CURRENT_POSITION":
            return action.position;
        default: 
            return state;
    }
}