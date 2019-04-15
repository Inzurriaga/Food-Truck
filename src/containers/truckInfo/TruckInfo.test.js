import React from "react";
import { shallow } from "enzyme";
import TruckInfo from "./TruckInfo"

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
})