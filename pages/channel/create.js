import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import ProfileCard from '../../components/profile-card';
import { ButtonContainer, Container, Display, Text, FieldContainer, HolderItem, HolderList, Info, InputContainer, LowerSection, MiddleSection, PinboardContainer, SearchContainer, ThemeDisplay, UpperSection, ThemeInputContainer } from '../../styles/pages/channel/create';
import Button from '../../styles/ui/button';
import HashTags from '../../styles/ui/hashtags';
import Image from '../../styles/ui/image';
import Input from '../../styles/ui/input';
import Pinboard from '../../styles/ui/pinboard';
import Search from '../../styles/ui/search';
import Space from '../../styles/ui/space';
import interestList from '../../utility/interest-list';
import axios from '../../axios-config';
import { header } from '../../utility/header';
import { errConfig } from '../../utility/error-config';
import { message } from 'antd';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addChannel } from '../../store/actions/channel';
import getList from '../../styles/ui/pinboard/config/list';

const CreatePage = ({ session }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState();
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [themeUrl, setThemeUrl] = useState('');
    const [themeFile, setThemeFile] = useState();
    const [theme, setTheme] = useState('');
    const [selectedPins, setSelectedPins] = useState([]);
    const [searchAccount, setSearchAccount] = useState('');
    const [accountSuggestions, setAccountSuggestions] = useState([]);
    const [holders, setHolders] = useState([]);

    useEffect(() => { 
        searchHandler();
    }, [searchAccount]);

    const createChannel = async () => {
        try { 
            const hashtags = getList(selectedPins);
            const holderIds = holders.map(holder => holder.id);
            await dispatch(addChannel(session.jwt, {
                name,
                type,
                description,
                hashtags,
                photo,
                theme,
                holders: holderIds,
            }));
            message.success({
                content: 'Channel created successfully.',
            });
        } catch (err) {
            const errMsg = errConfig(err, 'Channel creation failed!');
            message.error({
                content: errMsg,
            });
        }
    }

    const searchHandler = async () => { 
        const { data: { results } } = await axios.get('search/?type=user&input=' + searchAccount, header(session.jwt));
        console.log('account search results', results);
        setAccountSuggestions(results);
    }

    const holderAddHandler = (user) => {
        setHolders(prevState => {
            const updatedHolders = [...prevState, user];
            return updatedHolders;
        });
    }
    
    const holderRemoveHandler = (id) => { 
        setHolders(prevState => { 
            const updatedHolders = [...prevState].filter(holder => holder.id !== id);
            return updatedHolders;
        });
    }

    const selectImageFile = (fileList) => { 
        if (fileList.length === 0)
            return;
        const file = fileList[0];
        const fileUrl = URL.createObjectURL(file);
        setImageFile(file);
        setImageUrl(fileUrl);
    }

    const selectThemeFile = (fileList) => { 
        if (fileList.length === 0)
            return;
        const file = fileList[0];
        const fileUrl = URL.createObjectURL(file);
        setThemeFile(file);
        setThemeUrl(fileUrl);
    }

    const savePhoto = async () => {
        try {
            const formData = new FormData();
            formData.append('caption', name);
            formData.append('type', 'image');
            formData.append('url', imageUrl);
            formData.append('image', imageFile);
            const { data: { gallery } } = await axios.post('gallery', formData);
            setPhoto(gallery.id); 
            message.success({
                content: 'Photo saved successfully',
            });
        } catch (err) {
            const errMsg = errConfig(err, 'Error saving photo!');
            message.error({
                content: errMsg,
            });
        }
    }
    
    const saveTheme = async () => {
        try {
            const formData = new FormData();
            formData.append('caption', name);
            formData.append('type', 'image');
            formData.append('url', themeUrl);
            formData.append('image', themeFile);
            const { data: { gallery } } = await axios.post('gallery', formData);
            setTheme(gallery.id); 
            message.success({
                content: 'Theme saved successfully',
            });
        } catch (err) {
            const errMsg = errConfig(err, 'Error saving theme!');
            message.error({
                content: errMsg,
            });
        }
    }

    return (
        <Container>
            <UpperSection>
                <Display>
                    {imageUrl && imageUrl.trim().length > 0 && <Image src={imageUrl} alt={'Image Display'} />}
                </Display>
                <Space horizontal={20} />
                <Info>
                    <Input text={name} setText={setName} placeholder={'Channel Name'} type={'text'} />
                    <Space vertical={20} />
                    <Input text={type} setText={setType} placeholder={'Channel Type'} type={'text'} />
                    <Space vertical={20} />
                    <FieldContainer>
                        <Button size='small' borderRadius={5} upload onSelectFile={selectImageFile}>upload</Button>
                        <Space horizontal={20} />
                        <Text>Or</Text>
                        <Space horizontal={20} />
                        <Input text={imageUrl} setText={setImageUrl} placeholder={'Image URL'} type={'text'} />
                    </FieldContainer>
                    <Space vertical={20} />
                    <Button size='small' borderRadius={5} onClick={savePhoto} block>Save Image</Button>
                    <Space vertical={20} />
                    <InputContainer>
                        <Input text={description} setText={setDescription} placeholder={'Channel Description'} type={'text'} expand />
                    </InputContainer>
                </Info>
            </UpperSection>
            <Space vertical={40} />
            <MiddleSection>
                <PinboardContainer>
                    <Pinboard bordered legend={'Channel Tags'} pinList={interestList} selectedPins={selectedPins} setSelectedPins={setSelectedPins} />
                </PinboardContainer>
                <Space vertical={20} />
                <HashTags tags={selectedPins} />
                <Space vertical={20} />
                <ThemeDisplay>
                    {themeUrl && themeUrl.trim().length > 0 && <Image src={themeUrl} alt={'Theme Display'} />}
                </ThemeDisplay>
                <Space vertical={20} />
                <ThemeInputContainer>
                    <FieldContainer>
                        <Button size='small' borderRadius={5} upload onSelectFile={selectThemeFile}>upload</Button>
                        <Space horizontal={20} />
                        <Text>Or</Text>
                        <Space horizontal={20} />
                        <Input text={themeUrl} setText={setThemeUrl} placeholder={'Theme URL'} type={'text'} />
                    </FieldContainer>
                    <Space vertical={20} />
                    <Button size='small' borderRadius={5} onClick={saveTheme} block>Save Theme</Button>
                </ThemeInputContainer>
            </MiddleSection>
            <Space vertical={40} />
            <LowerSection>
                <SearchContainer>
                    <Search
                        text={searchAccount}
                        setText={setSearchAccount}
                        onSearch={searchHandler}
                        placeholder="Search Account"
                        suggestions={accountSuggestions}
                        onSuggestionClick={holderAddHandler}
                    />
                </SearchContainer>
                <Space vertical={20} />
                <HolderList>
                    {
                        holders.map(holder => (
                            <HolderItem key={holder.id}>
                                <ProfileCard
                                    item={holder}
                                    removable={true}
                                    onRemove={() => holderRemoveHandler(holder.id)}
                                />
                            </HolderItem>
                        ))
                    }
                </HolderList>
                <Space vertical={20} />
                <ButtonContainer>
                    <Button onClick={createChannel} block>Create Channel</Button>
                </ButtonContainer>
            </LowerSection>
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

  return {
    props: {
      session,
    }
  }
}

export default CreatePage;
