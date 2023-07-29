import RootLayout from "../components/Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>This is a home page</div>
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