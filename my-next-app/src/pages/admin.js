import DashboardLayout from "../components/Layouts/DashboardLayout";
import RootLayout from "../components/Layouts/RootLayout";


const AdminHomePage = () => {
    return (
        <div>
            <h2>This is admin page</h2>
        </div>
    );
};

export default AdminHomePage;

AdminHomePage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}