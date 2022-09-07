import Img from 'next/image';
import PropTypes from 'prop-types';

const Image = ({ src, alt, height, width, objectFit = 'cover' }) => {
    if (height && width) {
        return <Img
            loader={() => src}
            src={src}
            height={height}
            width={width}
            objectFit={objectFit}
        />
    }

    return <Img
        loader={() => src}
        src={src}
        layout={'fill'}
        objectFit={objectFit}
    />;
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    objectFit: PropTypes.oneOf(['cover', 'contain']),
};

export default Image;