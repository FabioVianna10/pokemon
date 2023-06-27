import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shotcurt icon" href="/assets/favicon.ico"></link>
        <title>Poke Next</title>
      </Head>
      <Navbar />
      <main className="mainContainer">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
