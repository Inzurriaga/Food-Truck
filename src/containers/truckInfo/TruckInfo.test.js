import React from "react";
import { shallow } from "enzyme";
import { getTruckInfo } from "../../thunk/GetTruckInfo"
import { TruckInfo, mapDispatchToProps} from "./TruckInfo"
jest.mock("../../thunk/GetTruckInfo")

describe("TruckInfo", () => {
    describe("TruckInfo", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(
                <TruckInfo />
            )
        })
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
    describe("mapDispatchToProps", () => {
        it("should call dispatch with saveHouse", () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = getTruckInfo("www")
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.getTruckInfo("www")
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })

})