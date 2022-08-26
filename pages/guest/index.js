import { getSession } from 'next-auth/react';
import Feature from '../../components/feature';
import { Container, Header, HeaderButtons, HeaderTextArea, HeaderDisplay, HeaderLabel, HeaderDisplaySection, HeaderTextSection } from '../../styles/pages/guest';
import Button from '../../styles/ui/button';
import Image from '../../styles/ui/image';
import Space from '../../styles/ui/space';
import featureList from '../../utility/feature-list';

const GuestPage = () => {

    const headerInfo = {
        src: '/images/themes/theme01.jpg',
        height: 400,
        width: 500,
    };

    return (
        <Container>
            <Header>
                <HeaderTextSection>
                    <HeaderTextArea>
                        <HeaderLabel>
                            live streaming platform for everyone
                        </HeaderLabel>
                        <HeaderButtons>
                            <Button borderRadius={10} block size='large'>
                                Join Today
                            </Button>
                            <Space horizontal={13} />
                            <Button borderRadius={10} block size='large'>
                                Preview
                            </Button>
                        </HeaderButtons>
                    </HeaderTextArea>
                </HeaderTextSection>
                <HeaderDisplaySection>
                    <HeaderDisplay>
                        <Image
                            src={headerInfo.src}
                            alt={'Header Display Photo'}
                            height={400}
                            width={600}
                        />
                    </HeaderDisplay>
                </HeaderDisplaySection>
            </Header>
            {
                featureList.map(({alt, id, illustration, reverse, text}) => <Feature
                    text={text}
                    key={id}
                    illustration={illustration}
                    alt={alt}
                    reverse={reverse}
                />)
            }
        </Container>
    );
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    if (session && session.currentUser) {
        return {
        redirect: {
            destination: '/',
            permament: false,
        }
        };
    }

    return {
        props: {
        session,
        }
    }
}

export default GuestPage;