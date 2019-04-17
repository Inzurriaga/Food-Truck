export const user = (state = null, action) => {
    switch(action.type){
        case "SIGN_IN":
            return action.userinfo;
        case "SIGN_OUT":
            return null;
        default: 
            return state;
    }
}