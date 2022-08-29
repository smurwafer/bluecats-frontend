import Img from 'next/image';
import PropTypes from 'prop-types';

const Image = ({ src, alt, height, width }) => {
    if (height && width) {
        return <Img
            loader={() => src}
            src={src}
            height={height}
            width={width}
            objectFit={'cover'}
        />
    }

    return <Img
        loader={() => src}
        src={src}
        layout={'fill'}
        objectFit={'cover'}
    />;
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
};

export default Image;