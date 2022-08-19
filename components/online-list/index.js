import Account from "../../styles/ui/account";
import Space from "../../styles/ui/space";
import { Container, Legend, List, ListItem } from "./styles";

const OnlineList = ({ list = [] }) => { 
    return (
        <Container>
            <Legend>Online Users</Legend>
            <List>
                {list.map(({ image }) => (
                    <Account
                        url={image}
                        type={'square'}
                        size={55}
                        online={true}
                    />
                ))}
            </List>  
            <Space vertical={20} />
        </Container>
    );
}

export default OnlineList;