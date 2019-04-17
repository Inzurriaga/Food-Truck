import React from "react";
import { shallow } from "enzyme";
import { updateTrucksArray } from "../../thunk/UpdateTrucksArray"
import { OptionsTab, mapDispatchToProps } from "./OptionsTab"
jest.mock("../../thunk/UpdateTrucksArray")

describe("OptionsTab", () => {
    describe("OptionsTab", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(
                <OptionsTab />
            )
        })
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
        it("it should default state", () => {
            expect(wrapper.state()).toEqual({
                location: "",
                distance: 1,
                open: false,
            })
        })
        it("it should change the state location on change", () => {
            wrapper.find(".location").at(1).simulate("change", {target: {value: "hello", className: "location"}})
            expect(wrapper.state("location")).toEqual("hello")
        })
        it("it should change the state distance on change", () => {
            wrapper.find(".distance").simulate("change", {target: {value: "1", className: "distance"}})
            expect(wrapper.state("distance")).toEqual("1")
        })
        it("it should change the state of open on click", () => {
            wrapper.find("open-button").simulate("click")
            expect(wrapper.state("open")).toEqual(true)
        })
        it("it should open tab when state open is true", () => {
            wrapper.find("open-button").simulate("click")
            expect(wrapper).toMatchSnapshot()
        })
    })
    describe("mapDispatchToProps", () => {
        it("should call dispatch with saveHouse", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = updateTrucksArray("1", "21020")
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.updateTrucksArray("1", "21020")
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })

})