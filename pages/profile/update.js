import { getSession } from 'next-auth/react';
import { useState } from 'react';
import { Container, Display, DisplayContainer, DisplaySection, Form, FormSection, Info, Label, Text, TextContainer } from '../../styles/pages/profile/update';
import Button from '../../styles/ui/button';
import Image from '../../styles/ui/image';
import Input from '../../styles/ui/input';
import Pinboard from '../../styles/ui/pinboard';
import Space from '../../styles/ui/space';
import interestList from '../../utility/interest-list';
import { galleryUrl } from '../../utility/media-url';
import { buildClient } from '../../axios-config';
import { header } from '../../utility/header';
import { errConfig } from '../../utility/error-config';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { updateUser } from '../../store/actions';
import axios from '../../axios-config';

const ProfileUpdatePage = ({ user, session }) => {
    const dispatch = useDispatch();

    const [userName, setUserName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);
    const [imageUrl, setImageUrl] = useState(galleryUrl(user.profile.photo));
    const [imageFile, setImageFile] = useState(null);
    const [photo, setPhoto] = useState(user.profile.photo.id);
    const [bio, setBio] = useState(user.profile.bio);
    const [phone, setPhone] = useState(user.phone);
    const [gender, setGender] = useState(user.profile.gender);
    const [age, setAge] = useState(user.profile.age);
  
    const interests = user.profile.interests.map((interest, index) => ({
      id: interest,
      value: interest,
    }));
  
    const [selectedPins, setSelectedPins] = useState(interests);

  const updateAccount = async (e) => {
      e.preventDefault();
      try {
        const interests = selectedPins.map(selectedPin => selectedPin.value);
        await dispatch(updateUser(session.jwt, user.id, {
          userName, email, photo, bio, phone, gender, age, interests,
        }));
        message.success({
          content: 'Update Account Successfull',
        });
      } catch (err) {
        const errMsg = errConfig(err, 'Update Account Failed!');
        message.error({
          content: errMsg,
        });
      }
    }
  
    const selectFile = (fileList) => {
        if (fileList.length === 0)
          return;
        const file = fileList[0];  
        const fileUrl = URL.createObjectURL(file);
        setImageFile(file);
        setImageUrl(fileUrl);
    }
  
  const savePhoto = async () => {
      try {
        const formData = new FormData();
        formData.append('caption', userName);
        formData.append('type', 'image');
        formData.append('url', imageUrl);
        formData.append('image', imageFile);
        const { data: { gallery } } = await axios.post('gallery', formData);
        setPhoto(gallery.id);
        message.success({
          content: 'Photo Saved Successfully',
        });    
      } catch (err) {
        const errMsg = errConfig(err, 'Photo Saving Failed!');
        message.error(errMsg);
      }
    }

    return (
        <Container>
            <DisplaySection>
                <DisplayContainer>
                    <Display>
                        {imageUrl.trim().length > 0 && <Image src={imageUrl} alt={userName} />}
                    </Display>
                    <Space vertical={20} />
                    <Button borderRadius={5} size={'small'} upload onSelectFile={selectFile}>Upload</Button>
                    <Text>Or</Text>
                    <Input text={imageUrl} setText={setImageUrl} placeholder={'Image URL'} block />
                    <Space vertical={20} />
                    <Button borderRadius={5} size={'small'} onClick={savePhoto} block>Save Photo</Button>
                </DisplayContainer>
            </DisplaySection>
            <Space horizontal={40} />
            <FormSection>
                <Form onSubmit={updateAccount}>
                    <Info>
                        <Input label='Username' text={userName} setText={setUserName} placeholder={'Username'} block />
                        <Space vertical={20} />
                        <Input label='Email' text={email} setText={setEmail} placeholder={'Email'} block type={'email'} />
                        <Space vertical={20} />
                        <TextContainer>
                            <Input label='Bio' text={bio} setText={setBio} placeholder={'Bio'} expand block />
                        </TextContainer>
                        <Space vertical={40} />
                        <Input label='Phone Number' text={phone} setText={setPhone} placeholder={'Phone'} block />
                        <Space vertical={20} />
                        <Input label='Gender' text={gender} setText={setGender} placeholder={'Gender'} block />
                        <Space vertical={20} />
                        <Input label='Age' text={age} setText={setAge} placeholder={'Age'} block />
                        <Space vertical={20} />
                        <Pinboard bordered legend={'Select Your Interests'} pinList={interestList} selectedPins={selectedPins} setSelectedPins={setSelectedPins} />
                        <Space vertical={40} />
                        <Button block type='submit'>Update Account</Button>
                    </Info>
                </Form>
            </FormSection>
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
      user: session.currentUser,
    }
  }
}

export default ProfileUpdatePage;