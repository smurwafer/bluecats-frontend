import { useState } from 'react';
import { Container, Form, FormSection } from '../../styles/pages/profile/deactivate';
import Button from '../../styles/ui/button';
import Input from '../../styles/ui/input';
import Space from '../../styles/ui/space';

const ProfileDeactivatePage = () => {
    const [password, setPassword] = useState('');
    const [deactivationPin, setDeactivationPin] = useState('');

    const sendDeactivationPin = () => {}

    const deactivateAccount = () => {}

    return (
        <Container>
            <FormSection>
                <Form>
                    <Input label='Password' text={password} setText={setPassword} block placeholder={'Password'} />
                    <Space vertical={20} />
                    <Button borderRadius={5} onClick={sendDeactivationPin}>Send Account Deactivation Pin</Button>
                    <Space vertical={20} />
                    <Input label='Deactivation Pin' text={deactivationPin} setText={setDeactivationPin} block placeholder={'Pin'} />
                    <Space vertical={20} />
                    <Button borderRadius={5} color={'danger'} block onClick={deactivateAccount}>Deactivate Account</Button>
                </Form>
            </FormSection>
        </Container>
    );
}

export default ProfileDeactivatePage;