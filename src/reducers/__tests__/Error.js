import React from "react";
import { error } from "../Error";

describe("error Reducer", () => {
    it("should have a default state", () => {
        const mockAction = {
            type: "DEFAULT", 

        }
        const response = error(undefined, mockAction)
        expect(response).toEqual("")
    })
    it("should return a string from the argument", () => {
        const mockAction = {
            type: "ERROR", 
            error: "hello"   
        }
        const response = error(undefined, mockAction)
        expect(response).toEqual("hello")
    })
})