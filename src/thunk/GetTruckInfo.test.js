import React from "react"
import { getTruckInfo } from "./GetTruckInfo"
import { loadingDisplay } from "../actions/Index"

describe("GetTruck Thunk", () => {
    let mockDispatch;
    beforeEach(() => {
        mockDispatch = jest.fn()
      })
    it("calls dispatch with the loadingDisplay action", () =>  {
        const thunk = getTruckInfo()
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(loadingDisplay())
    })
    it("calls dispatch with the loadingDisplay action when status is false", () => {
        window.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: false
              })
        )
        const thunk = getTruckInfo()
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(loadingDisplay())
    })
})