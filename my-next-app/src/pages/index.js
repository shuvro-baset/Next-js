import RootLayout from "../components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title> Next Home Page</title>
        <meta name="home page" description="this is next js" />
      </Head>
      <h2>This is home page</h2>
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}