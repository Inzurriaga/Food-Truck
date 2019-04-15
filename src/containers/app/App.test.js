import React from "react";
import { App }  from "./App"
import { shallow } from "enzyme";

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
                <App />
            )
        })
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
})