import React from "react";
import { position } from "../Position"

describe("Position Reducer", () => {
    it("should have a default state", () => {
        const mockAction = {
            type: "DEFAULT",
            position: []
        }
        const response = position(undefined, mockAction)
        expect(response).toEqual(null)
    })
    it("should return action array", () => {
        const mockAction = {
            type: "CURRENT_POSITION",
            position: [123, 123]
        }
        const expected = [123, 123]
        const response = position(undefined, mockAction)
        expect(response).toEqual(expected)
    })
})