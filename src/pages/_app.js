import "@/styles/globals.css";
import Layout from "../components/Layout";
import { Roboto } from 'next/font/google'

const roboto = ({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',

})

export default function App({ Component, pageProps }) {
  return (
    <Layout className={roboto.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
