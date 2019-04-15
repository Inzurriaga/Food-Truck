import React from "react";
import { shallow } from "enzyme";
import OptionsTab from "./OptionsTab"

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
    })
})