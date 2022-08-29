import Account from "../../styles/ui/account";
import AccountType from "../../styles/ui/utility/category/account-type";
import { Close, Container } from "./styles";
import { IoMdClose } from 'react-icons/io';
import colorMap from "../../styles/ui/utility/color-config";
import { galleryUrl } from "../../utility/media-url";

const ProfileCard = ({ item, removable = false, onRemove, onClick }) => {
    return (
        <Container>
            <Account title={item.userName} url={galleryUrl(item.profile.photo)} type={AccountType.Circle} size={100} onClick={onClick} />
            {removable && <Close>
                <IoMdClose size={18} color={colorMap['secondary'].normal} onClick={onRemove} />
            </Close>}
        </Container>
    );
}

export default ProfileCard;