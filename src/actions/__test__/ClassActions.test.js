// @flow
import * as ClassActions from "../ClassActions";
import type {Classroom} from "../../types/Classroom";

describe("classActions.js", () => {

    test('postClass', () => {
        let classroom: Classroom = {
            name: "test"
        };

        let actual = ClassActions.postClass(classroom);

        expect(actual.type).toEqual(ClassActions.POST_CLASS);
        expect(actual.payload).toBeInstanceOf(Promise);
    });
});