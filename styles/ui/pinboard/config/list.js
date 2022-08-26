const getList = (pins = []) => {
    return pins.map(pin => pin.value);
}

export default getList;