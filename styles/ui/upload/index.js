import PropTypes from 'prop-types';
import Button from "../button";
import Image from "../image";
import Input from "../input";
import { Action, Container, Display, DisplaySection, Icon, Text } from "./styles";
import { GrFormAdd } from 'react-icons/gr';
import Space from '../space';
import colorMap from '../utility/color-config';

const Upload = ({ imageUrl, setImageUrl, image, setImage, placeholder }) => {

    const setFileHandler = (fileList) => {
        if (fileList.length === 0)
            return;
        const file = fileList[0];
        setImage(file);
    }

    return (
        <Container>
            <DisplaySection>
                <Display>
                    {image || imageUrl.length ? <Image src={image ? image.path : imageUrl} alt={'display image'} /> : null}
                    <Icon>
                        <GrFormAdd size={30} color={colorMap['secondary'].light1} />
                    </Icon>
                </Display>
                <Space vertical={20} />
                <Button
                    block={true}
                    size="small"
                    borderRadius={10}
                    upload
                    onSelectFile={setFileHandler}
                >
                    Upload
                </Button>
            </DisplaySection>
            <Text>Or</Text>
            <Input
                placeholder={placeholder}
                text={imageUrl}
                setText={setImageUrl}
                type={'text'}
            />
        </Container>
    );
}

Upload.propTypes = {
    imageUrl: PropTypes.string,
    setImageUrl: PropTypes.func,
    image: PropTypes.object,
    setImage: PropTypes.func,
    placeholder: PropTypes.string,
};

export default Upload;