// @flow

import React from 'react'
import Enzyme from 'enzyme'
import CreateClass from "../CreateClass";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from "material-ui/Dialog";

describe('<CreateClass />', () => {

    let onPostClass = jest.fn().mockImplementation(classroom => Promise.resolve);

    function createElement() {
        let props = {
            postStatus: {
                posting: false,
                posted: false,
                postError: null
            },
            onPostClass: onPostClass
        };

        return Enzyme.shallow(
            <CreateClass
                {...props}
            />
        );
    }

    it("Should render without crashing", () => {
        const wrapper = createElement();
        expect(wrapper).not.toBeNull();
    });

    it("Should show add button without form", () => {
        const wrapper = createElement();
        expect(wrapper.find(FloatingActionButton)).not.toBeNull();
        expect(wrapper.find(FloatingActionButton).find(ContentAdd)).not.toBeNull();

        expect(wrapper.find(Dialog).props().open).toBe(false);
    });


    it("Should open dialog if click button", () => {
        const wrapper = createElement();
        wrapper.find(FloatingActionButton).simulate('click');

        expect(wrapper.find(Dialog).props().open).toBe(true);
    });

    it("Should close dialog if click cancel button of form", () => {
        const wrapper = createElement();
        wrapper.find(FloatingActionButton).simulate('click');

        expect(wrapper.find(Dialog).props().open).toBe(true);
    });
});