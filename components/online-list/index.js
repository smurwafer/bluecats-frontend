import Account from "../../styles/ui/account";
import Space from "../../styles/ui/space";
import { Container, Legend, List, ListItem } from "./styles";

const OnlineList = ({ list = [] }) => { 
    return (
        <Container>
            <Legend>Online Users</Legend>
            <List>
                {list.map(({ image, self }) => (
                    <ListItem>
                        <Account
                            url={image}
                            type={'square'}
                            size={100}
                            online={true}
                            self={self}
                        />
                    </ListItem>
                ))}
            </List>  
            <Space vertical={20} />
        </Container>
    );
}

export default OnlineList;