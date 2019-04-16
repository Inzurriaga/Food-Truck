import { loadingDisplay } from "../actions/Index"

export const getTruckInfo = (url) => {
    return async (dispatch) => {
        try {
            dispatch(loadingDisplay())
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const truck = await response.json();
            dispatch(loadingDisplay());
            return truck
        } catch (error) {
            console.log(error)
        }
    }
}