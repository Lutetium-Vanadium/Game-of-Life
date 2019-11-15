export default dispatch => {
    return height => {
        dispatch({
            type: "SET_HEIGHT",
            payload: height
        });
    };
};
