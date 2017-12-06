// @flow

import React from 'react'
import Enzyme from 'enzyme'
import Dialog from "material-ui/Dialog";
import AddButton from "../../Common/AddButton";
import AddStudent from "../AddStudent";

describe('<AddStudent />', () => {

    let onAddStudent;

    function createElement() {
        onAddStudent = jest.fn().mockReturnValue(Promise.resolve());
        let props = {
            postStatus: {
                posting: false,
                posted: false,
                postError: null
            },
            onAddStudent: onAddStudent,
            classroom:{id: 1, className: "CM1"}
        };

        return Enzyme.shallow(
            <AddStudent
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
        expect(wrapper.find(AddButton)).not.toBeNull();

        expect(wrapper.find(Dialog).props().open).toBe(false);
    });


    it("Should open dialog if click button", () => {
        const wrapper = createElement();
        wrapper.find(AddButton).simulate('click');

        expect(wrapper.find(Dialog).props().open).toBe(true);
    });


    it("Call the submit function", () => {
        const wrapper = createElement();

        wrapper.instance().handleSubmit({
            studentFirstName: "Jean",
            studentLastName: "Bon",
            born: new Date("10/12/1992")
        });

        expect(onAddStudent.mock.calls.length).toBe(1);
        expect(onAddStudent.mock.calls[0][0]).toEqual({
            firstName: "Jean",
            lastName: "Bon",
            born: "1992-10-11T23:00:00.000Z",
            idClass: 1
        });

    });

});