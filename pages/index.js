import Header from '../components/header';
import OnlineList from '../components/online-list';
import StreamList from '../components/stream-list';
import { Container } from '../styles/pages/home';
import Space from '../styles/ui/space';

const Home = () => {
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
      <OnlineList />
      <StreamList
        legend={'Trending Today'}
        list={list}
      />
      <StreamList
        legend={'Trending Today'}
        list={list}
      />
      <StreamList
        legend={'Trending Today'}
        list={list}
      />
      <Space vertical={30} />
    </Container>    
  );
}

export default Home;