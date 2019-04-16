import React from "react";
import { shallow } from "enzyme";
import { MapContainer } from "./Map"

const mockTrucks = []
const mockPosition = []

describe("Map", () => {
    describe("Map", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(
                <MapContainer trucks={mockTrucks}
                                position={mockPosition}/>
            )
        })
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
})