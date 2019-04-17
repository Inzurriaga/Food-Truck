import React from "react";
import { App, mapDispatchToProps, mapStateToProps }  from "./App";
import { getCurrentPosition, errorHandling } from "../../actions/Index";
import { getTrucksArray } from "../../thunk/GetTrucksArray";
import { shallow } from "enzyme";

const mockgetCurrentPosition = jest.fn()
const mockgetTrucksArray = jest.fn()
const mockerrorHandling = jest.fn()

describe("App", () => {
    describe("App", () => {
        let wrapper;
        let mockGeolocation
        beforeEach(() => {
            mockGeolocation = {
                getCurrentPosition: jest.fn(),
                watchPosition: jest.fn()
            };   
            global.navigator.geolocation = mockGeolocation;
            wrapper = shallow(
                <App  getCurrentPosition={mockgetCurrentPosition}
                        getTrucksArray={mockgetTrucksArray}
                        errorHandling={mockerrorHandling}/>
            )
        })
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
        it("should call props when getCurrentUserPosition is called", () => {
            wrapper.instance().getCurrentUserPosition()
            expect(mockgetCurrentPosition).toHaveBeenCalled()
            expect(mockgetTrucksArray).toHaveBeenCalled()
        })
        it("should call props when geolocationError is called", () => {
            wrapper.instance().geolocationError()
            expect(mockerrorHandling).toHaveBeenCalled()
        })
    })
    describe("mapDispatchToProps", () => {
        it("should call dispatch with saveHouse", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = getCurrentPosition([123,123])
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.getCurrentPosition([123,123])
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
        it("should call dispatch with displayLoading", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = errorHandling("hello")
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.errorHandling("hello")
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
        it("should call dispatch with displayLoading", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = getTrucksArray([123,123])
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.getTrucksArray([123,123])
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
    describe("mapStateToProps", () => {
        it("should only return a object of what we need from state", () => {
            const mockState = {
                loading: true,
                trucks: [{},{},{}],
                error: "error"
            }
            const expected = {
                loading: true,
                trucks: [{},{},{}]
            }
            const response = mapStateToProps(mockState)
            expect(response).toEqual(expected)
        })
    })
})