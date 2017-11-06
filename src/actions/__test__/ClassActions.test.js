// @flow
import * as ClassActions from "../ClassActions";
import type {Classroom} from "../../types/Classroom";
import MockAdapter from 'axios-mock-adapter';
import apiInstance from "../../api/ApiHelper"


describe("classActions.js", () => {
    let mock = new MockAdapter(apiInstance);

    mock.onGet('/postClass.json').reply(200, {
        "name": "classe de test",
        "id": 1
    });

    test('postClass', () => {
        let classroom: Classroom = {
            className: "test"
        };

        let actual = ClassActions.postClass(classroom);

        expect(actual.type).toEqual(ClassActions.POST_CLASS);
        expect(actual.payload).toBeInstanceOf(Promise);
    });
});