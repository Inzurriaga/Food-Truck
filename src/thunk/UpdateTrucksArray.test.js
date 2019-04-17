import React from "react"
import { updateTrucksArray } from "./UpdateTrucksArray"
import { loadingDisplay, setTruckList, getCurrentPosition } from "../actions/Index"

describe("GetTruck Thunk", () => {
    let mockDispatch;
    beforeEach(() => {
        mockDispatch = jest.fn()
      })
    it("calls dispatch with the loadingDisplay action", () =>  {
        const thunk = updateTrucksArray()
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(loadingDisplay())
    })
    it.skip("calls dispatch with the setTruckList, loadingDisplay and getCurrentPosition action when status is true", async () => {
        const mockTrucks = [{},{},{}]
        window.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: true,
                json:  () => Promise.resolve({
                    truck: mockTrucks,
                    position: []
                  })
              })
        )
        const thunk = updateTrucksArray()
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(setTruckList(mockTrucks))
        expect(mockDispatch).toHaveBeenCalledWith(getCurrentPosition([]))
        expect(mockDispatch).toHaveBeenCalledWith(loadingDisplay())
    })
    it("calls dispatch with the loadingDisplay action when status is false", () => {
        window.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: false
              })
        )
        const thunk = updateTrucksArray()
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(loadingDisplay())
    })
})