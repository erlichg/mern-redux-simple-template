import { handleActions } from "redux-actions";
import { increment, decrement, getusers, adduser } from "./actions";

export const defaultState = { counter: 0, users: [] };

export const reducer = handleActions(
    {
        [increment]: state => ({ ...state, counter: state.counter + 1 }),
        [decrement]: state => ({ ...state, counter: state.counter - 1 }),
        [getusers]: (state, payload) => ({
            ...state,
            users: payload.success
            ? payload.result
            : []
        }),
        [adduser]: (state, payload) => ({
            ...state,
            users: payload.success
                ? [...state.users, payload.result]
                : state.users
        })
    },
    defaultState
);

export const asyncActionsMiddleware = store => next => action => {
    const isActionAsync = action.meta ? action.meta.async : false;
    if (!isActionAsync) {
        return next(action);
    }

    const { url, data, method } = action.meta;
    let options = {
        method,
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    fetch(url, options)
        .then(resultsObj => resultsObj.json())
        .then(json => {
            next({ ...action, result: json, success: true });
        })
        .catch(err => {
            console.error(err);
            next({
                ...action,
                success: false
            }); // Failure result. Comment to not call action in this case
        });

    return next(action);
};
