import React from "react";
import { trucks } from "../Trucks"

describe("Truck Reducer", () => {
    it("should have a default state", () => {
        const mockAction = {
            type: "DEFAULT",
            trucks: [{},{},{}]
        }
        const response = trucks(undefined, mockAction)
        expect(response).toEqual([])
    })
    it("should return the action array", () => {
        const mockAction = {
            type: "SET_TRUCK",
            trucks: [{},{},{}]
        }
        const expected = [{},{},{}]
        const response = trucks(undefined, mockAction)
        expect(response).toEqual(expected)
    })
})