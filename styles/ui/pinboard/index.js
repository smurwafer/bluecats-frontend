import PropTypes from 'prop-types';
import sizeMap from './config/size';
import { Board, Container, Legend, Pin } from "./styles";

const Pinboard = ({
    legend,
    pinList = [],
    selectedPins,
    setSelectedPins,
    size = 'medium',
    color = 'primary',
    bordered = false,
}) => {
    const pinClickHandler = (pin) => {
        const selected = selectedPins.findIndex(selectedPin => selectedPin.id === pin.id) !== -1;
        
        if (selected) {
            setSelectedPins(prevState => { 
                const newList = prevState.filter(selectedPin => selectedPin.id !== pin.id);
                return newList;
            });
        } else {
            setSelectedPins(prevState => { 
                const newList = [...prevState, pin];
                return newList;
            });
        }
    }

    return (
        <Container>
            <Legend>
                {legend}
            </Legend>
            <Board
                bordered={bordered}
                {...sizeMap[size]}
            >
                {pinList.map(pin => <Pin
                        key={pin.id}
                        selected={selectedPins.findIndex(selectedPin => selectedPin.id === pin.id) !== -1}
                        onClick={() => pinClickHandler(pin)}
                        color={color}
                        {...sizeMap[size]}
                    >
                        {pin.value}
                    </Pin>
                )}
            </Board>
        </Container>
    );
}

Pinboard.propTypes = {
    legend: PropTypes.string,
    pinList: PropTypes.array,
    selectedPins: PropTypes.array,
    setSelectedPins: PropTypes.func,
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning', 'success', 'dark']),
    bordered: PropTypes.bool,
};

export default Pinboard;