import { IoMdAdd } from "react-icons/io";
import Image from "../../styles/ui/image";
import colorMap from "../../styles/ui/utility/color-config";
import { Container, Display, Dot, DotContainer, Icon } from "./styles";
import { galleryUrl } from '../../utility/media-url';

const GalleryCard = ({ create = false, active = false, gallery, onClick, onDotClick }) => {
    const iconSize = 40;
    const iconColor = '#fff';

    if (create) {
        return (
            <Container>
                <Display onClick={onClick}>
                    <Icon>
                        <IoMdAdd size={iconSize} color={iconColor} />
                    </Icon>
                </Display>
                <DotContainer />
            </Container>
        );
    }

    return (
        <Container>
            <Display onClick={onClick}>
                <Image src={galleryUrl(gallery)} alt={gallery.caption} />
            </Display>
            <DotContainer>
                {active && <Dot onClick={onDotClick} />}
            </DotContainer>
        </Container>
    );
}

export default GalleryCard;