const reducer = (
    state = {
        width: 40,
        height: 25,
        speed: 1.5,
        numAlive: 132
    },
    action
) => {
    switch (action.type) {
        case "SET_WIDTH":
            state = {
                ...state,
                width: action.payload
            };
            break;
        case "SET_HEIGHT":
            state = {
                ...state,
                height: action.payload
            };
            break;
        case "SET_SPEED":
            state = {
                ...state,
                speed: action.payload
            };
            break;
        case "SET_NUM_ALIVE":
            state = {
                ...state,
                numAlive: action.payload
            };
            break;
        default:
            break;
    }

    return state;
};

export default reducer;
