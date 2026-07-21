import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'
import ProductCard from './ProductList/ProductCard'

const ProductList = () => {

    const firstRowProducts = [
        {
            id: 1,
            title: "COLOR PENCILS",
            price: "$320.00",
            rating: 5,
            reviewsCount: 34,
            availability: "In stock",
            productCode: "0405689",
            brand: "Lee",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            image: "https://edumin.dexignlab.com/xhtml/images/product/2.jpg" // Apni image ka path yahan dein
        },
        {
            id: 2,
            title: "PENCILS",
            price: "$325.00",
            rating: 4.5,
            reviewsCount: 34,
            availability: "In stock",
            productCode: "0405689",
            brand: "Lee",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            image: "https://edumin.dexignlab.com/xhtml/images/product/3.jpg"
        },
        {
            id: 3,
            title: "STAPLER",
            price: "$480.00",
            rating: 5,
            reviewsCount: 34,
            availability: "In stock",
            productCode: "0405689",
            brand: "Lee",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            image: "https://edumin.dexignlab.com/xhtml/images/product/4.jpg"
        }
    ];

    const secondRowProducts = [
        {
            id: 4,
            title: "PROJECT BOOK",
            price: "$658.00",
            rating: 5,
            reviewsCount: 34,
            availability: "In stock",
            productCode: "0405689",
            brand: "Lee",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            image: "https://edumin.dexignlab.com/xhtml/images/product/5.jpg"
        },
        {
            id: 5,
            title: "COLORFUL BOOK",
            price: "$280.00",
            rating: 4.5,
            reviewsCount: 34,
            availability: "In stock",
            productCode: "0405689",
            brand: "Lee",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            image: "https://edumin.dexignlab.com/xhtml/images/product/6.jpg"
        },
        {
            id: 6,
            title: "NOTEBOOK",
            price: "$600.00",
            rating: 5,
            reviewsCount: 34,
            availability: "In stock",
            productCode: "0405689",
            brand: "Lee",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            image: "https://edumin.dexignlab.com/xhtml/images/product/7.jpg"
        }
    ];
    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle="Shop" grandChildTitle="Product Grid" />

                <div className="flex justify-between items-center gap-[1.5rem]">
                    {firstRowProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="flex justify-between items-center gap-[1.5rem]">
                    {secondRowProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default ProductList