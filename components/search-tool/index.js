import { Fragment } from "react";
import History from "../../styles/ui/history";
import Search from "../../styles/ui/search";
import Space from "../../styles/ui/space";
import { Container, HistorySection } from "./styles";

const SearchTool = ({ text, setText, placeholder, history = [] }) => {
    const onSearch = () => { 

    }

    const onHistoryClick = () => {

    }

    return (
        <Container>
            <Search text={text} setText={setText} placeholder={placeholder} onSearch={onSearch} />
            <Space vertical={20} />
            <HistorySection>
                {
                    history.map(({ id, text }) => (
                        <Fragment>
                            <History key={id} text={text} onClick={onHistoryClick} />
                            <Space vertical={10} />
                        </Fragment>
                    ))
                }
            </HistorySection>
        </Container>
    );
}

export default SearchTool;