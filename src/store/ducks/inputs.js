export const Types = {
    SET_FIRST_INPUT: 'input/SET_FILTER',
    SET_SECOND_INPUT: 'input/SET_SECOND',
    SET_NUMBER_OF_BITS: 'SET_NUMBER_OF_BITS'
}

const INITIAL_STATE = {
    firstInput: '',
    secondInput: '',
    numberOfBits: 4
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_FIRST_INPUT:
            return {
                ...state,
                firstInput: action.value
            };

        case Types.SET_SECOND_INPUT:
            return {
                ...state,
                secondInput: action.value
            };

        case Types.SET_NUMBER_OF_BITS:
            return {
                ...state,
                numberOfBits: action.value
            };

        default:
            return state;
    }
};

export const Actions = {
    setFirstInput: (value) => ({
        type: Types.SET_FIRST_INPUT,
        value
    }),

    setSecondInput: (value) => ({
        type: Types.SET_SECOND_INPUT,
        value
    }),

    setNumberOfBits: (value) => ({
        type: Types.SET_NUMBER_OF_BITS,
        value
    }),
};