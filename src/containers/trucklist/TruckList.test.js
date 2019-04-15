import React from "react";
import { shallow } from "enzyme"
import { TruckList } from "./TruckList"

const mockTrucks = []

describe("TruckList", () => {
    describe("TruckList", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(
                <TruckList trucks={mockTrucks}/>
            )
        })
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
})