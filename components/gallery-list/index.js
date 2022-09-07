import axios from '../../axios-config';
import { useState } from "react";
import GalleryCard from "../gallery-card";
import GalleryModal from "../gallery-modal";
import { Container } from "./styles";

const GalleryList = ({ legend, gallery, activeGalleryId, setGallery, setGalleryIds, setActiveGalleryId }) => {
    const [visible, setVisible] = useState(false);

    const emptyGallery = {
        caption: '',
        type: 'image',
        url: '',
        isResourceUrl: false,
    };

    const [modalGallery, setModalGallery] = useState({
        caption: '',
        type: 'image',
        url: '',
        isResourceUrl: false,
    });

    const galleryClickHandler = (id) => {
        setActiveGalleryId(id);
    }

    const openGalleryModal = () => {
        setVisible(true);
    }

    const closeGalleryModal = () => {
        setModalGallery({
            caption: '',
            type: 'image',
            url: '',
            isResourceUrl: false,
        });
        setVisible(false);
    }

    const dotClickHandler = () => {
        const galleryItem = gallery.find(g => g.id === activeGalleryId);
        console.log(galleryItem);
        setModalGallery(galleryItem);
        openGalleryModal();
    }

    const addGalleryHandler = async (galleryData) => {
        const { data: { gallery } } = await axios.post('gallery', galleryData);
        setGallery(prevState => {
            const newList = [gallery, ...prevState];
            return newList;
        });
        setGalleryIds(prevState => {
            const newIds = [gallery.id, ...prevState];
            return newIds;
        });
        if (activeGalleryId.trim().length === 0) {
            setActiveGalleryId(gallery.id);
        } 
        closeGalleryModal();
    }

    return (
        <Container>
            <GalleryCard
                key={'create-gallery'}
                create
                onClick={openGalleryModal}
            />
            {gallery.map(galleryItem => (
                <GalleryCard
                    key={galleryItem.id}
                    active={galleryItem.id === activeGalleryId}
                    gallery={galleryItem}
                    onClick={() => galleryClickHandler(galleryItem.id)}
                    onDotClick={dotClickHandler}
                />
            ))}
            <GalleryModal
                gallery={modalGallery}
                onGallerySubmit={addGalleryHandler}
                visible={visible} 
                closeGalleryModal={closeGalleryModal}
            />
        </Container>
    );
}

export default GalleryList;