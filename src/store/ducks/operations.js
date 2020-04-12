export const Types = {
    SET_OPERATION: 'input/SET_OPERATION',
}

const INITIAL_STATE = {
    operation: ''
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_OPERATION:
            return {
                ...state,
                operation: action.value
            };

        default:
            return state;
    }
};

export const Actions = {
    setOperation: (value) => ({
        type: Types.SET_OPERATION,
        value
    }),
};