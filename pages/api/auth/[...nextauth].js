import NextAuth from 'next-auth';
import Providers from 'next-auth/providers/credentials';
import { decode } from 'next-auth/jwt';
import axios from '../../../axios-config';
import headerConfig from '../header-config';

export default NextAuth({
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Providers({
            credentials: {
                userNameOrEmailOrPhone: { label: 'Username Or Email Or Phone', type: 'text', placeholder: 'Username Or Email Or Phone' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            authorize: async ({ userNameOrEmailOrPhone, password }) => {
                try { 
                    const { data } = await axios.post('auth/login', { userNameOrEmailOrPhone, password });
                    console.log('login response', data);
                    return Promise.resolve({
                        jwt: data.token,
                        currentUser: data.currentUser,
                    });
                } catch (err) {
                    throw err;
                }
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.jwt = user.jwt;
                token.user = user.currentUser;
            }
            
            return Promise.resolve(token);
        },
        session: async ({ session, token, user }) => {
            // console.log(token);
            if (token) {
                session.currentUser = token.user;
                session.jwt = token.jwt;
            }
            const { data } = await axios.get('current-user', headerConfig(session.jwt));
            const { currentUser } = data;
            session.currentUser = currentUser;
            return Promise.resolve(session);
        },
    }
});