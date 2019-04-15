import React from "react";
import { loading } from "../Loading";

describe("Loading Reducer", () => {
    it("should have a default state", () => {
        const mockAction = {
            type: "DEFAULT",    
        }
        const response = loading(undefined, mockAction)
        expect(response).toEqual(false)
    })
    it("should return a boolean opposite of the previous state", () => {
        const mockAction = {
            type: "LOADING",    
        }
        const response = loading(undefined, mockAction)
        expect(response).toEqual(true)
    })
})