import { createActions } from "redux-actions";

export const { increment, decrement, getusers, adduser } = createActions({
    INCREMENT: undefined,
    DECREMENT: undefined,
    GETUSERS: [
        undefined,
        () => ({ async: true, url: "/api/users", method: "get" })
    ],
    ADDUSER: [
        undefined,
        user => ({ async: true, url: "/api/users", data: user, method: "post" })
    ]
});
