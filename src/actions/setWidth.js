export default dispatch => {
    return width => {
        dispatch({
            type: "SET_WIDTH",
            payload: width
        });
    };
};
