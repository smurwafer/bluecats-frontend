import SearchResultType from "../../utility/category/search-result-type";
import ChannelCard from "../channel-card";
import ProfileCard from "../profile-card";
import StreamCard from "../stream-card";
import { Container } from "./styles";

const SearchResult = ({ type = SearchResultType.Stream, item }) => { 
    if (type === SearchResultType.Stream) {
        return (
            <Container>
                <StreamCard item={item} />
            </Container>
        );
    }

    if (type === SearchResultType.Channel) {
        return (
            <Container>
                <ChannelCard item={item} />
            </Container>
        );
    }

    return (
        <Container>
            <ProfileCard item={item} />
        </Container>
    );
}

export default SearchResult;