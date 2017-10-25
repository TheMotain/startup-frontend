// @flow

import React from 'react'
import Enzyme from 'enzyme'
import AddMessage from "../AddMessage";

describe('<AddMessage />', () => {

    it("Should render without crashing", () => {
        const wrapper = Enzyme.shallow(
            <AddMessage postMessage={() => {}}/>
        );
        expect(wrapper).not.toBeNull();
    });
});