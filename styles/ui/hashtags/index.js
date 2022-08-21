import { Container, HashTagItem, HashTagText } from "./styles";

const HashTags = ({ tags = [] }) => {
    return (
        <Container>
            {tags.map(tag => (
                <HashTagItem key={tag.id}>
                    <HashTagText>
                        #{tag.value}
                    </HashTagText>
                </HashTagItem>
            ))}
        </Container>
    );
}

export default HashTags;