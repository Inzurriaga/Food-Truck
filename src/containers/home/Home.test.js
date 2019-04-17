import React from "react";
import { Home, mapStateToProps} from "./Home"
import { shallow } from "enzyme";

describe("Home", () => {
    describe("Home", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(
                <Home loading={false}/>
            )
        })
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
        it("should display loading when loading it true", () => {
            wrapper = shallow(
                <Home loading={true}/>
            )
            expect(wrapper).toMatchSnapshot()
        })
    })
    describe("mapStateToProps", () => {
        it("should only return a object of what we need from state", () => {
            const mockState = {
                loading: true,
                trucks: [{},{},{}]
            }
            const expected = {
                loading: true
            }
            const response = mapStateToProps(mockState)
            expect(response).toEqual(expected)
        })
    })
})