import PropTypes from 'prop-types';
import { useState } from "react";
import Button from "../../styles/ui/button";
import Image from "../../styles/ui/image";
import Input from "../../styles/ui/input";
import Pinboard from "../../styles/ui/pinboard";
import Space from '../../styles/ui/space';
import TextLink from "../../styles/ui/text-link";
import Upload from "../../styles/ui/upload";
import interestList from "../../utility/interest-list";
import Brand from "../brand";
import { Container, Display, FieldArea, Form, FormHeader, FormSection, PrevIcon, Text } from "./styles";
import { BiArrowBack } from 'react-icons/bi';
import colorMap from '../../styles/ui/utility/color-config';
import Pincoder from '../../styles/ui/pincoder';

const Auth = ({ type = 'login' }) => {
    // prev icon props
    const iconSize = 24;
    const iconColor = colorMap['secondary'].normal;


    // login credentials
    const [userNameOrEmail, setUserNameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    // signup credentials
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState(18);
    const [imageUrl, setImageUrl] = useState('');
    const [image, setImage] = useState();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [interests, setInterests] = useState([]);

    // page
    const [page, setPage] = useState(0);

    const next = (e) => {
        e.preventDefault();
        console.log(page);
        setPage(prevState => { 
            if (prevState < authPages[type].pageList.length - 1) {
                return prevState + 1;
            }
            return prevState;
        });
    }

    const prev = (e) => {
        e.preventDefault();
        setPage(prevState => { 
            if (prevState > 0)
                return prevState - 1;
            return prevState;
        });
    }

    const login = (e) => {
        e.preventDefault();

    }

    const signup = (e) => {
        e.preventDefault();
    }

    const done = (e) => {
        e.preventDefault();
    }

    const authPages = {
        'login': {
            displayUrl: '/images/photos/photo09.jpg',
            pageList: [
                <FormSection>
                    <Brand />
                    <Space vertical={40} />
                    <Input
                        placeholder={'Username or Email'}
                        text={userNameOrEmail}
                        setText={setUserNameOrEmail}
                        type={'text'}
                    />
                    <Space vertical={20} />
                    <Input
                        placeholder={'Password'}
                        text={password}
                        setText={setPassword}
                        type={'password'}
                    />
                    <Space flexed />
                    <Button block onClick={login}>Login</Button>
                    <Space vertical={10} />
                    <Text>Or</Text>
                    <Space vertical={10} />
                    <TextLink fontSize={16} href={'/signup'}>Signup</TextLink>
                    <Space vertical={30} />
                </FormSection>
            ]
        },
        'signup': {
            displayUrl: '/images/photos/photo01.jpg',
            pageList: [
                <FormSection>
                    <Brand />
                    <Space vertical={40} />
                    <Input
                        placeholder={'Username'}
                        text={userName}
                        setText={setUserName}
                        type={'text'}
                    />
                    <Space vertical={20} />
                    <Input
                        placeholder={'Email'}
                        text={email}
                        setText={setEmail}
                        type={'email'}
                    />
                    <Space flexed />
                    <Button block onClick={next}>Next</Button>
                    <Space vertical={10} />
                    <Text>Or</Text>
                    <Space vertical={10} />
                    <TextLink href={'/login'}>Login</TextLink>
                    <Space vertical={30} />
                </FormSection>,

                <FormSection>
                    <FormHeader>
                        <PrevIcon>
                            <BiArrowBack size={iconSize} color={iconColor} onClick={prev} />
                        </PrevIcon>
                    </FormHeader>
                    <Pincoder
                        type={'email'}
                        legend={'Email verification'}
                        text={'An verification code has been sent to your entered email address, please enter that code for verification here.'}
                    />
                    <Space flexed />
                    <Button block onClick={next}>Next</Button>
                    {/* <Space vertical={10} /> */}
                </FormSection>,

                <FormSection>
                    <FormHeader>
                        <PrevIcon>
                            <BiArrowBack size={iconSize} color={iconColor} onClick={prev} />
                        </PrevIcon>
                    </FormHeader>
                    <Space vertical={20} />
                    <Input
                        placeholder={'Mobile'}
                        text={mobile}
                        setText={setMobile}
                        type={'text'}
                    />
                    <Space vertical={10} />
                    <Input
                        placeholder={'Gender'}
                        text={gender}
                        setText={setGender}
                        type={'text'}
                    />
                    <Space vertical={10} />
                    <Input
                        placeholder={'Age'}
                        text={age}
                        setText={setAge}
                        type={'number'}
                    />
                    <Space flexed />
                    <Button block onClick={next}>Next</Button>
                </FormSection>,

                <FormSection>
                    <FormHeader>
                        <PrevIcon>
                            <BiArrowBack size={iconSize} color={iconColor} onClick={prev} />
                        </PrevIcon>
                    </FormHeader>
                    <Space vertical={20} />
                    <Upload
                        image={image}
                        setImage={setImage}
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        placeholder={'Profile Image URL'}
                    />
                    <Space flexed />
                    <Button block onClick={next}>Next</Button>
                </FormSection>,

                <FormSection>
                    <FormHeader>
                        <PrevIcon>
                            <BiArrowBack size={iconSize} color={iconColor} onClick={prev} />
                        </PrevIcon>
                    </FormHeader>
                    <Space vertical={20} />
                    <Input
                        placeholder={'Password'}
                        text={password}
                        setText={setPassword}
                        type={'password'}
                    />
                    <Space vertical={20} />
                    <Input
                        placeholder={'Confirm Password'}
                        text={confirmPassword}
                        setText={setConfirmPassword}
                        type={'password'}
                    />
                    <Space flexed />
                    <Button block onClick={next}>Signup</Button>
                </FormSection>,

                <FormSection>
                    <FormHeader>
                        <PrevIcon>
                            <BiArrowBack size={iconSize} color={iconColor} onClick={prev} />
                        </PrevIcon>
                    </FormHeader>
                    <Pinboard
                        legend={'Select Your Interests'}
                        pinList={interestList}
                        selectedPins={interests}
                        setSelectedPins={setInterests}
                    />
                    <Space flexed />
                    <Button block onClick={done}>Done</Button>
                </FormSection>,
            ]
        },
    };

    return (
        <Container>
            <Display>
                <Image
                    src={authPages[type].displayUrl}
                    alt={type + ' display'}
                />
            </Display>
            <FieldArea>
                <Form>
                    {authPages[type].pageList[page]}
                </Form>
            </FieldArea>
        </Container>
    );
}

Auth.propTypes = {
    type: PropTypes.oneOf(['login', 'signup']),
};

export default Auth;