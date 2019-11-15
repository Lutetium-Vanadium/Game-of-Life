export default dispatch => {
    return speed => {
        dispatch({
            type: "SET_SPEED",
            payload: speed
        });
    };
};
