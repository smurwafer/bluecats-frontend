import Position from "./category/position-type";

const PositionMap = {
    'top-left': {
        top: true, left: true, right: false, bottom: false,
    },
    'top-right': {
        top: true, left: false, right: true, bottom: false,
    },
    'bottom-left': {
        top: false, left: true, right: false, bottom: true,
    },
    'bottom-right': {
        top: false, left: false, right: true, bottom: true,
    }
};

export default PositionMap;