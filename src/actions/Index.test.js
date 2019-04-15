import React from "react";
import { getCurrentPosition, loadingDisplay, setTruckList} from "./Index"

describe("Actions", () => {
    it("getCurrentPosition", () => {
        const response = getCurrentPosition([123,123])
        const expected = {
            type: "CURRENT_POSITION",
            position: [123,123]
        }
        expect(response).toEqual(expected)
    })
    it("loadingDisplay", () => {
        const response = loadingDisplay()
        const expected = {
            type: "LOADING"
        }
        expect(response).toEqual(expected)
    })
    it("setTruckList", () => {
        const response = setTruckList([{},{},{}])
        const expected = {
            type: "SET_TRUCK",
            trucks: [{},{},{}]
        }
        expect(response).toEqual(expected)
    })
})