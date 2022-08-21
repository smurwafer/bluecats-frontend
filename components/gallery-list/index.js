import { useState } from "react";
import GalleryCard from "../gallery-card";
import { Container } from "./styles";

const GalleryList = ({ legend, gallery, setGallery }) => {
    const [activeId, setActiveId] = useState();

    const galleryClickHandler = (id) => {
        setActiveId(id);
    }

    const addGalleryHandler = () => {

    }

    return (
        <Container>
            <GalleryCard
                key={'create-gallery'}
                create
                onClick={addGalleryHandler}
            />
            {gallery.map(galleryItem => (
                <GalleryCard
                    key={galleryItem.id}
                    active={galleryItem.id === activeId}
                    gallery={galleryItem}
                    onClick={() => galleryClickHandler(galleryItem.id)}
                />
            ))}
        </Container>
    );
}

export default GalleryList;