import React from "react"
import { getTrucksArray} from "./GetTrucksArray"
import { loadingDisplay, setTruckList } from "../actions/Index"

describe("GetTruck Thunk", () => {
    let mockDispatch;
    beforeEach(() => {
        mockDispatch = jest.fn()
      })
    it("calls dispatch with the loadingDisplay action", () =>  {
        const thunk = getTrucksArray()
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(loadingDisplay())
    })
    it.skip("calls dispatch with the setTruckList and loadingDisplay action when status is true", async () => {
        const mockTrucks = [{},{},{}]
        window.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: true,
                json:  () => Promise.resolve({
                    truck: mockTrucks
                  })
              })
        )
        const thunk = getTrucksArray()
        await thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(setTruckList(mockTrucks))
        expect(mockDispatch).toHaveBeenCalledWith(loadingDisplay())
    })
    it("calls dispatch with the loadingDisplay action when status is false", () => {
        window.fetch = jest.fn().mockImplementation(() => 
            Promise.resolve({
                ok: false
              })
        )
        const thunk = getTrucksArray()
        thunk(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(loadingDisplay())
    })
})