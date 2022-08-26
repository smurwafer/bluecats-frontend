import Layout from '../containers/layout';
import '../styles/globals.css'
import 'antd/dist/antd.css';
import { SessionProvider } from 'next-auth/react';
import ReduxProvider from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ReduxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>  
      </ReduxProvider>
    </SessionProvider>
  );
}

export default MyApp;