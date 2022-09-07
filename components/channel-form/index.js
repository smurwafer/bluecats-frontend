import { useEffect, useState } from 'react';
import ProfileCard from '../../components/profile-card';
import { ButtonContainer, Container, Display, Text, FieldContainer, HolderItem, HolderList, Info, InputContainer, LowerSection, MiddleSection, PinboardContainer, SearchContainer, ThemeDisplay, UpperSection, ThemeInputContainer } from './styles';
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
import { useDispatch } from 'react-redux';
import { addChannel, updateChannel } from '../../store/actions/channel';
import getList from '../../styles/ui/pinboard/config/list';
import { galleryUrl } from '../../utility/media-url';
import ChannelFormType from '../../utility/category/channel-form-type';

const ChannelForm = ({ session, channel, channelType = ChannelFormType.Create }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState(channel.name);
    const [type, setType] = useState(channel.type);
    const [imageUrl, setImageUrl] = useState(galleryUrl(channel.photo));
    const [imageFile, setImageFile] = useState();
    const [photo, setPhoto] = useState(channel.photo.id);
    const [description, setDescription] = useState(channel.description);
    const [themeUrl, setThemeUrl] = useState(galleryUrl(channel.theme));
    const [themeFile, setThemeFile] = useState();
    const [theme, setTheme] = useState(channel.theme.id);
    const channelHashTags = channel.hashtags.map(h => ({ id: h, value: h }));
    const [selectedPins, setSelectedPins] = useState(channelHashTags);
    const [holders, setHolders] = useState(channel.holders);

    const [searchAccount, setSearchAccount] = useState('');
    const [accountSuggestions, setAccountSuggestions] = useState([]);

    useEffect(() => { 
        searchHandler();
    }, [searchAccount]);

    const createChannelHandler = async () => {
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

    const updateChannelHandler = async () => {
        try { 
            const hashtags = getList(selectedPins);
            const holderIds = holders.map(holder => holder.id);
            await dispatch(updateChannel(session.jwt, channel.id, {
                name,
                type,
                description,
                hashtags,
                photo,
                theme,
                holders: holderIds,
            }));
            message.success({
                content: 'Channel updated successfully.',
            });
        } catch (err) {
            const errMsg = errConfig(err, 'Channel updation failed!');
            message.error({
                content: errMsg,
            });
        }
    }

    const submitHandler = async () => {
        if (channelType === ChannelFormType.Create)
            await createChannelHandler();
        else
            await updateChannelHandler();
    }

    const searchHandler = async () => { 
        const { data: { results } } = await axios.get('search/?type=user&input=' + searchAccount, header(session.jwt));
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
                    <Button onClick={submitHandler} block>{channelType === ChannelFormType.Create ? 'Create' : 'Update'} Channel</Button>
                </ButtonContainer>
            </LowerSection>
        </Container>
    );
}

export default ChannelForm;
