import { Modal } from "antd";
import { useEffect, useState } from "react";
import Button from "../../styles/ui/button";
import Image from "../../styles/ui/image";
import Input from "../../styles/ui/input";
import Space from "../../styles/ui/space";
import { Container, Display, Form, Section, Text } from "./styles";

const GalleryModal = ({ gallery, onGallerySubmit, visible, closeGalleryModal }) => {
    const [caption, setCaption] = useState(gallery.caption);
    const [type, setType] = useState(gallery.type);
    const [url, setUrl] = useState(gallery.url);
    const [file, setFile] = useState();

    useEffect(() => {
        setCaption(gallery.caption);
        setType(gallery.type);
        setUrl(gallery.url);
    }, [gallery]);

    const gallerySubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('caption', caption);
        formData.append('type', type);
        formData.append('url', url);
        formData.append('file', file);
        await onGallerySubmit(formData);
    }

    const fileSelectHandler = (fileList = []) => {
        if (fileList.length === 0)
            return;
        const file = fileList[0];
        const fileUrl = URL.createObjectURL(file);
        setUrl(fileUrl);
        setFile(file);
    }

    return (
        <Modal centered closable onCancel={closeGalleryModal} visible={visible} footer={null} bodyStyle={{ padding: 0 }}>
            <Container>
                <Section>
                    <Display>
                        {url && url.trim().length > 0 && <Image src={url} alt={caption} />}
                    </Display>
                </Section>
                <Section>
                    <Form onSubmit={gallerySubmitHandler}>
                        <Input block text={caption} setText={setCaption} placeholder={'Caption'} />
                        <Space vertical={10} />
                        <Input block text={type} setText={setType} placeholder={'Type'} />
                        <Space vertical={10} />
                        <Input block text={url} setText={setUrl} placeholder={'Gallery URL'} />
                        <Space vertical={5} />
                        <Text>Or</Text>
                        <Space vertical={5} />
                        <Button upload size={'small'} borderRadius={5} onSelectFile={fileSelectHandler}>Upload</Button>
                        <Space vertical={20} />
                        <Button block size={'small'} borderRadius={5} type={'submit'}>Submit Gallery</Button>
                    </Form>
                </Section>
            </Container>    
        </Modal>
    );
}

export default GalleryModal;