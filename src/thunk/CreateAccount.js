import {} from "../actions/Index"

export const createAccount = (userType, userInfo ) => {
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    }
    return  async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3000/api/${userType}/create`, option)
        } catch(error){

        }
    }
}