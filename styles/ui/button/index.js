import { Btn, UploadInput } from './styles';
import PropTypes from 'prop-types';
import colorMap from '../utility/color-config';
import sizeMap from './config/size';
import { Fragment, useRef } from 'react';

const Button = ({
    children,
    size = 'medium',
    borderRadius = 10,
    color = 'primary',
    block = false,
    loading = false,
    upload = false,
    onClick,
    onSelectFile,
}) => { 
    const uploadRef = useRef();

    const selectFileHandler = (e) => {
        e.preventDefault();
        uploadRef.current.click();        
    }

    if (upload) {
        return (
            <Fragment>
                <UploadInput
                    ref={uploadRef}
                    type={'file'}
                    id={'chooseFile'}
                    name={'chooseFileButton'}
                    onChange={e => {
                        e.preventDefault();
                        onSelectFile(e.target.files)
                    }}
                />
                <Btn borderRadius={borderRadius} color={colorMap[color].normal} block={block} {...sizeMap[size]} onClick={selectFileHandler}>
                    {children}
                </Btn>
            </Fragment>
        );
    }

    return (
        <Btn borderRadius={borderRadius} color={colorMap[color].normal} block={block} {...sizeMap[size]} onClick={onClick}>
            {children}
        </Btn>
    );
}

Button.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    borderRadius: PropTypes.number,
    color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning', 'success', 'dark']),
    block: PropTypes.bool,
    loading: PropTypes.bool,
    upload: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;