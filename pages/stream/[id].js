import { getSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { buildClient } from '../../axios-config';
import CommentTool from '../../components/comment-tool';
import StreamList from '../../components/stream-list';
import { Container, UpperSection, StreamSection, CommentSection, LowerSection } from '../../styles/pages/stream/view';
import Space from '../../styles/ui/space';
import { header } from '../../utility/header';

const StreamViewer = dynamic(() => import('../../components/stream-viewer'), {
    ssr: false,
});

const StreamViewPage = ({ stream, comments, session, recommendedStreams }) => {    
    return (
        <Container>
            <UpperSection>
                <StreamViewer session={session} stream={stream} comments={comments} />
            </UpperSection>
            <Space vertical={20} />
            <LowerSection>
                <StreamList legend={'Related Streams'} list={recommendedStreams} />
            </LowerSection>
        </Container>
    );
}

export const getServerSideProps = async ({ req, params }) => { 
    const session = await getSession({ req });
    if (!session || !session.currentUser) {
      return {
        redirect: {
          destination: '/guest',
          permament: false,
        }
      };
    }
    const { id } = params;
    const client = buildClient({ req });
    const { data: { stream } } = await client.get('stream/' + id, header(session.jwt));
    const { data: { comments } } = await client.get('comment/' + id, header(session.jwt));
    const { data: { streams } } = await client.get('stream', header(session.jwt));
    
    return {
        props: {
            session,
            stream,
            comments,
            recommendedStreams: streams,
        }
    }; 
}

export default StreamViewPage;