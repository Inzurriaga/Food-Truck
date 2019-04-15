import { loadingDisplay, setTruckList } from "../actions/Index"

export const getTruck = (userInfo) => {
    console.log("hello world", userInfo)
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
    }
    return async (dispatch) => {
        try {
            dispatch(loadingDisplay())
            const response = await fetch("http://localhost:3000/api/truck", option)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const notes = await response.json();
            dispatch(setTruckList(notes));
            dispatch(loadingDisplay());
        } catch (error) {
            console.log(error)
        }
    }
}