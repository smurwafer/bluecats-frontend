import Account from "../../styles/ui/account";
import Space from "../../styles/ui/space";
import { galleryUrl } from "../../utility/media-url";
import { Container, Legend, List, ListItem } from "./styles";

const OnlineList = ({ list = [] }) => { 
    return (
        <Container>
            <Legend>Online Users</Legend>
            <List>
                {list.map((user) => (
                    <ListItem>
                        <Account
                            url={galleryUrl(user.profile.photo)}
                            type={'square'}
                            size={100}
                            online={true}
                            self={false}
                        />
                    </ListItem>
                ))}
            </List>  
            <Space vertical={20} />
        </Container>
    );
}

export default OnlineList;