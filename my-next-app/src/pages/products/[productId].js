import { useRouter } from "next/router";

const ProductDetailsPage = () => {
    const router = useRouter();
    return (
        <div>
            <h1>This is dynamic product details page {router.query.productId}</h1>
        </div>
    );
};

export default ProductDetailsPage;