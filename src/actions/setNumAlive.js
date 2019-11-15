export default dispatch => {
    return numAlive => {
        dispatch({
            type: "SET_NUM_ALIVE",
            payload: numAlive
        });
    };
};
