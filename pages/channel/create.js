import { useState } from 'react';
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

const CreatePage = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState();
    const [description, setDescription] = useState('');
    const [themeUrl, setThemeUrl] = useState('');
    const [themeFile, setThemeFile] = useState();
    const [selectedPins, setSelectedPins] = useState([]);
    const [searchAccount, setSearchAccount] = useState('');

    const holders = [
        {
            id: 'u01',
            userName: 'G6Homi',
            image: '/images/profiles/profile01.jpg',
        },
        {
            id: 'u02',
            userName: 'G6Homi',
            image: '/images/profiles/profile01.jpg',
        },
        {
            id: 'u03',
            userName: 'G6Homi',
            image: '/images/profiles/profile01.jpg',
        },
    ];

    const searchHandler = () => { }
    
    const holderRemoveHandler = () => { }

    const selectImageFile = () => { }

    const selectThemeFile = () => { }

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
                </ThemeInputContainer>
            </MiddleSection>
            <Space vertical={40} />
            <LowerSection>
                <SearchContainer>
                    <Search text={searchAccount} setText={setSearchAccount} onSearch={searchHandler} placeholder="Search Account" />
                </SearchContainer>
                <Space vertical={20} />
                <HolderList>
                    {
                        holders.map(holder => (
                            <HolderItem key={holder.id}>
                                <ProfileCard
                                    item={holder}
                                    removable={true}
                                    onRemove={holderRemoveHandler}
                                />
                            </HolderItem>
                        ))
                    }
                </HolderList>
                <Space vertical={20} />
                <ButtonContainer>
                    <Button block>Create Channel</Button>
                </ButtonContainer>
            </LowerSection>
        </Container>
    );
}

export default CreatePage;
