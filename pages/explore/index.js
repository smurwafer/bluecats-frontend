import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SearchResult from "../../components/search-result";
import SearchTool from "../../components/search-tool";
import { Container, ResultArea, ResultSection, SearchSection, TabSection } from "../../styles/pages/explore";
import Space from "../../styles/ui/space";
import Tabbar from "../../styles/ui/tab-bar";
import SearchResultType from "../../utility/category/search-result-type";
import { buildClient } from '../../axios-config';
import { header } from '../../utility/header';

const ExplorePage = ({ session, users }) => {
    const [history, setHistory] = useState([
        {
            id: 'h01',
            text: 'Diatlov',
        },
        {
            id: 'h02',
            text: 'GTA-V Recent Streams',
        },
        {
            id: 'h03',
            text: 'Australia Tour',
        },
    ]);
    const tabs = [
        {
            id: 't01',
            value: 'Streams',
            type: SearchResultType.Stream,
        },
        {
            id: 't02',
            value: 'Channels',
            type: SearchResultType.Channel,
        },
        {
            id: 't03',
            value: 'Profiles',
            type: SearchResultType.Profile,
        },
    ];

    const [results, setResults] = useState([
        {
            id: 'r01',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        {
            id: 'r20',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        {
            id: 'r21',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        {
            id: 'r22',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        {
            id: 'r23',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        {
            id: 'r24',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        {
            id: 'r25',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        {
            id: 'r26',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        {
            id: 'r27',
            type: SearchResultType.Stream,
            item: {
                title: 'GTA-V Online',
                image: '/images/photos/photo01.jpg',
                creator: {
                    userName: 'G6Homi',
                    image: '/images/profiles/profile01.jpg',
                },
                views: '1.2k',
                live: true,
            },
        },
        // {
        //     id: 'r02',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         profile: {
        //             photo: '/images/profiles/profile01.jpg',
        //         }
        //     },
        // },
        // {
        //     id: 'r03',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r04',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r05',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r06',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r07',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r08',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r09',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r10',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r11',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r12',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r13',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
        // {
        //     id: 'r14',
        //     type: SearchResultType.Profile,
        //     item: {
        //         userName: 'G6Homi',
        //         image: '/images/profiles/profile01.jpg',
        //     },
        // },
    ]);

    const [search, setSearch] = useState('');
    const [tabId, setTabId] = useState(tabs[0].id);
    const [tabType, setTabType] = useState(SearchResultType.Stream);

    useEffect(() => {
        setResults(prevState => { 
            const userList = users.map(user => ({ id: user.id, item: user, type: SearchResultType.Profile}));
            const newList = [...prevState, ...userList];
            return newList;
        });
    }, []);

    useEffect(() => {
        console.log(results);
    }, [results]);

    return (
        <Container>
            <SearchSection>
                <SearchTool text={search} setText={setSearch} placeholder={'Search'} history={history} />
            </SearchSection>
            <Space horizontal={20} />
            <ResultSection>
                <TabSection>
                    <Tabbar tabs={tabs} tabId={tabId} setTabId={setTabId} setType={setTabType} />
                </TabSection>
                <ResultArea>
                    {results.filter(result => result.type === tabType).map(({ item, id, type }) => (
                        <SearchResult key={id} item={item} type={type} />
                    ))}
                </ResultArea>
            </ResultSection>
        </Container>
    );
}

export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    
    console.log('explore page', session);

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

    return {
        props: {
            session,
            users,
        }
    }
}

export default ExplorePage;