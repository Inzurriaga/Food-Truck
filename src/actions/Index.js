export const getCurrentPosition = (position) => ({
    type: "CURRENT_POSITION",
    position
})

export const loadingDisplay = () => ({
    type: "LOADING"
})

export const setTruckList = (trucks) => ({
    type: "SET_TRUCK",
    trucks
})

export const errorHandling = (error) => ({
    type: "ERROR",
    error
})