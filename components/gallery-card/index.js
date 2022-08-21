import { IoMdAdd } from "react-icons/io";
import Image from "../../styles/ui/image";
import colorMap from "../../styles/ui/utility/color-config";
import { Container, Display, Dot, DotContainer, Icon } from "./styles";

const GalleryCard = ({ create = false, active = false, gallery, onClick }) => {
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
                <Image src={gallery.image} alt={gallery.caption} />
            </Display>
            <DotContainer>
                {active && <Dot />}
            </DotContainer>
        </Container>
    );
}

export default GalleryCard;