import { Container, Tab, Text, TextContainer } from "./styles";

const Tabbar = ({ tabs = [], tabId, setTabId, setType }) => { 
    const clickHandler = (id, type) => {
        setTabId(id);
        setType(type);
    }

    return (
        <Container>
            {
                tabs.map(({ id, value, type }) => (
                    <Tab key={id} onClick={() => clickHandler(id, type)} active={id === tabId}>
                        <TextContainer>
                            <Text active={id === tabId}>{value}</Text>
                        </TextContainer>
                    </Tab>
                ))
            }
        </Container>
    );
}

export default Tabbar;