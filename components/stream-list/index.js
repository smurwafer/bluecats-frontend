import Space from "../../styles/ui/space";
import Stream from "../stream";
import { Container, Legend, List } from "./styles";

const StreamList = ({ legend, list = [] }) => { 
    return (
        <Container>
            <Legend>{legend}</Legend>
            <List>
                {list.map((stream) => (
                    <Stream
                        key={stream.id}
                        stream={stream}
                    />
                ))}
            </List>  
            <Space vertical={20} />
        </Container>
    );
}

export default StreamList;