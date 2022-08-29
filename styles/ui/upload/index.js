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
        const fileUrl = URL.createObjectURL(file);
        console.log('fileUrl', fileUrl);
        setImageUrl(fileUrl);
        setImage(file);
    }

    return (
        <Container>
            <DisplaySection>
                <Display>
                    {imageUrl.trim().length > 0 ? <Image src={imageUrl} alt={'display image'} /> : null}
                    {!imageUrl || imageUrl.trim().length === 0 ? <Icon>
                        <GrFormAdd size={30} color={colorMap['secondary'].light1} />
                    </Icon> : null}
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