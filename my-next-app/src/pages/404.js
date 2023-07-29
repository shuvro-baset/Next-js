import { useRouter } from 'next/router';
import React from 'react';

const notFoundPage = () => {
    const router = useRouter();

    setTimeout(()=> {
        router.push('/')
    }, 2500)
    return (
        <div>
            <h1>This is my 404 page</h1>
        </div>
    );
};

export default notFoundPage;