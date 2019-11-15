import setHeightCreater from "./setHeight";
import setWidthCreater from "./setWidth";
import setSpeedCreater from "./setSpeed";
import setNumAliveCreater from "./setNumAlive";

export default dispatch => {
    return {
        setHeight: setHeightCreater(dispatch),
        setSpeed: setSpeedCreater(dispatch),
        setWidth: setWidthCreater(dispatch),
        setNumAlive: setNumAliveCreater(dispatch)
    };
};
