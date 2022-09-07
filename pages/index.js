import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { buildClient } from '../axios-config';
import Header from '../components/header';
import OnlineList from '../components/online-list';
import StreamList from '../components/stream-list';
import socket from '../socket.io-config';
import { Container } from '../styles/pages/home';
import Space from '../styles/ui/space';
import { header } from '../utility/header';

const Home = ({ session, streams, users }) => {

  const list = [
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
    {
      id: 's01',
      title: 'GTA-V Online',
      url: '',
      gallery: [{ image: '/images/photos/photo08.jpeg', caption: 'gta5' }],
      creator: {
        userName: 'G6Homi',
        profile: { image: '/images/profiles/profile01.jpg', caption: 'g6homi' },
      },
      views: '1.2k',
      live: true,
    },
  ];

  const onlineList = [
    {
      id: 'u01',
      userName: 'john@32',
      image: '/images/profiles/profile01.jpg',
      self: true,
    },
    {
      id: 'u01',
      userName: 'john@32',
      image: '/images/profiles/profile01.jpg',
      self: false,
    },
    {
      id: 'u01',
      userName: 'john@32',
      image: '/images/profiles/profile01.jpg',
      self: false,
    },
    {
      id: 'u01',
      userName: 'john@32',
      image: '/images/profiles/profile01.jpg',
      self: false,
    },
  ];

  return (
    <Container>
      <Header
        title={'Visited Big Sur'}
        description={'Its finally the time to visit Big Sur, I welcome you all to this great and exciting journey to the heavens!'}
        creatorUrl={'/images/themes/theme02.jpeg'}
        backgroundUrl={'https://images.hdqwalls.com/download/landscape-lake-mountains-4k-zg-2560x1080.jpg'}
        name={'Charlie Green'}
        rating={4.4}
      />
      <OnlineList list={users} />
      <StreamList
        legend={'Trending Today'}
        list={streams}
      />
      <Space vertical={30} />
    </Container>    
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session || !session.currentUser) {
    return {
      redirect: {
        destination: '/guest',
        permament: false,
      }
    };
  }

  const client = buildClient({ req });
  
  const { data: { users } } = await client.get('user', header(session.jwt));
  const { data: { streams } } = await client.get('stream', header(session.jwt));

  return {
    props: {
      session,
      users,
      streams,
    }
  }
}

export default Home;