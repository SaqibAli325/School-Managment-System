import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'
import ProductCard from './ProductCard'

const ProductGrid = () => {
    const productsRow1 = [
        {
            product: "School Bag",
            oldAmount: 1259,
            newAmount: 761,
            image: "https://edumin.dexignlab.com/xhtml/images/product/1.jpg"
        },
        {
            product: "Color Pencils",
            oldAmount: null,
            newAmount: 159,
            image: "https://edumin.dexignlab.com/xhtml/images/product/2.jpg"
        },
        {
            product: "Pencils",
            oldAmount: 745,
            newAmount: 357,
            image: "https://edumin.dexignlab.com/xhtml/images/product/3.jpg"
        },
        {
            product: "Stapler",
            oldAmount: null,
            newAmount: 654,
            image: "https://edumin.dexignlab.com/xhtml/images/product/4.jpg"
        },
    ];

    const productsRow2 = [
        {
            product: "Project Book",
            oldAmount: null,
            newAmount: 369,
            image: "https://edumin.dexignlab.com/xhtml/images/product/5.jpg"
        },
        {
            product: "Colorful Book",
            oldAmount: 452,
            newAmount: 245,
            image: "https://edumin.dexignlab.com/xhtml/images/product/6.jpg"
        },
        {
            product: "Notebook",
            oldAmount: 678,
            newAmount: 364,
            image: "https://edumin.dexignlab.com/xhtml/images/product/7.jpg"
        },
        {
            product: "Project File",
            oldAmount: null,
            newAmount: 548,
            image: "https://edumin.dexignlab.com/xhtml/images/product/1.jpg"
        },
    ];
    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                {/* Data Goes Here */}
                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle="Shop" grandChildTitle="Product Grid" />

                <div className="flex items-center gap-6">
                    {
                        productsRow1.map((product, index) => (
                            <ProductCard key={index} product={product.product} oldAmount={product.oldAmount} newAmount={product.newAmount} image={product.image} />
                        ))
                    }
                </div>
                <div className="flex items-center gap-6">

                    {
                        productsRow2.map((product, index) => (
                            <ProductCard key={index} product={product.product} oldAmount={product.oldAmount} newAmount={product.newAmount} image={product.image} />
                        ))
                    }
                </div>
                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default ProductGrid
