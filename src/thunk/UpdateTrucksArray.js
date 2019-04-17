import { loadingDisplay, setTruckList, getCurrentPosition } from "../actions/Index"

export const updateTrucksArray = (distance, address) => {
    console.log(distance, address)
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({distance, address})
    }
    return async (dispatch) => {
        try {
            dispatch(loadingDisplay())
            const response = await fetch('http://localhost:3000/api/truck/update', option)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const trucks = await response.json();
            console.log(trucks)
            dispatch(setTruckList(trucks.trucklist));
            dispatch(getCurrentPosition(trucks.position))
            dispatch(loadingDisplay());
        } catch (error) {
            console.log(error)
        }
    }
}