import React from 'react';
import RootLayout from '../components/Layouts/RootLayout';

const contact = () => {
    return (
        <div>
            This is contact page
        </div>
    );
};

export default contact;

contact.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}