import { getSession } from 'next-auth/react';
import { useState } from 'react';
import { Container, Display, DisplayContainer, DisplaySection, Form, FormSection, Info, Label, Text, TextContainer } from '../../styles/pages/profile/update';
import Button from '../../styles/ui/button';
import Image from '../../styles/ui/image';
import Input from '../../styles/ui/input';
import Pinboard from '../../styles/ui/pinboard';
import Space from '../../styles/ui/space';
import interestList from '../../utility/interest-list';

const ProfileUpdatePage = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageFile, setImageFile] = useState();
    const [description, setDescription] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(18);
    const [selectedPins, setSelectedPins] = useState([]);

    const updateAccount = () => {}

    return (
        <Container>
            <DisplaySection>
                <DisplayContainer>
                    <Display>
                        {imageUrl.trim().length > 0 && <Image src={imageUrl} alt={userName} />}
                    </Display>
                    <Space vertical={20} />
                    <Button borderRadius={5} size={'small'} upload>Upload</Button>
                    <Text>Or</Text>
                    <Input text={imageUrl} setText={setImageUrl} placeholder={'Image URL'} block />
                </DisplayContainer>
            </DisplaySection>
            <Space horizontal={40} />
            <FormSection>
                <Form>
                    <Info>
                        <Input label='Username' text={userName} setText={setUserName} placeholder={'Username'} block />
                        <Space vertical={20} />
                        <Input label='Email' text={email} setText={setEmail} placeholder={'Email'} block type={'email'} />
                        <Space vertical={20} />
                        <TextContainer>
                            <Input label='Description' text={description} setText={setDescription} placeholder={'Description'} expand block />
                        </TextContainer>
                        <Space vertical={40} />
                        <Input label='Phone Number' text={mobile} setText={setMobile} placeholder={'Mobile'} block />
                        <Space vertical={20} />
                        <Input label='Gender' text={gender} setText={setGender} placeholder={'Gender'} block />
                        <Space vertical={20} />
                        <Input label='Age' text={age} setText={setAge} placeholder={'Age'} block />
                        <Space vertical={20} />
                        <Pinboard bordered legend={'Select Your Interests'} pinList={interestList} selectedPins={selectedPins} setSelectedPins={setSelectedPins} />
                        <Space vertical={40} />
                        <Button block onClick={updateAccount}>Update Account</Button>
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
    }
  }
}

export default ProfileUpdatePage;