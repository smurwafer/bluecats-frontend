import Image from "../../styles/ui/image";
import PropTypes from 'prop-types';
import { Container, IllustrationDisplay, IllustrationSection, Text, TextDisplay, TextSection } from "./styles";

const Feature = ({ text, alt, illustration, reverse }) => {

    if (reverse) {
        return (
            <Container>
                <TextSection>
                    <TextDisplay>
                        <Text>
                            {text}
                        </Text>
                    </TextDisplay>  
                </TextSection>
                <IllustrationSection>
                    <IllustrationDisplay>
                        <Image
                            src={illustration}
                            alt={alt}
                            height={300}
                            width={400}
                        />
                    </IllustrationDisplay>
                </IllustrationSection>
            </Container>
        );
    }

    return (
        <Container>
            <IllustrationSection>
                <IllustrationDisplay>
                    <Image
                        src={illustration}
                        alt={alt}
                        height={300}
                        width={400}
                    />
                </IllustrationDisplay>
            </IllustrationSection>
            <TextSection>
                <TextDisplay>
                    <Text>
                        {text}
                    </Text>
                </TextDisplay>
            </TextSection>
        </Container>
    );
}

Feature.propTypes = {
    text: PropTypes.string,
    illustration: PropTypes.string,
    alt: PropTypes.string,
    reverse: PropTypes.bool,
};

export default Feature;