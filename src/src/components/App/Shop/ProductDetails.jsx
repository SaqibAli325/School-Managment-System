import { useState, useRef } from 'react'
import { FaStar, FaShoppingBag, FaShoppingBasket } from 'react-icons/fa'
import Navbar from '../../Navbar'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import PageContainer from '../../Layout/PageContainer'
import SimilarProductCard from './SimilarProductCard'

// Single-line row that stays in one line (no wrap) and can be scrolled
// left/right either with the scrollbar/trackpad or by grabbing and
// dragging the boxes with the mouse.
const DragScrollRow = ({ children }) => {
    const rowRef = useRef(null)
    const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0, moved: false })

    const onMouseDown = (e) => {
        const row = rowRef.current
        dragState.current.isDown = true
        dragState.current.moved = false
        dragState.current.startX = e.pageX - row.offsetLeft
        dragState.current.scrollLeft = row.scrollLeft
        row.classList.add('cursor-grabbing')
    }

    const stopDragging = () => {
        dragState.current.isDown = false
        rowRef.current?.classList.remove('cursor-grabbing')
    }

    const onMouseMove = (e) => {
        if (!dragState.current.isDown) return
        e.preventDefault()
        const row = rowRef.current
        const x = e.pageX - row.offsetLeft
        const walk = x - dragState.current.startX
        if (Math.abs(walk) > 5) dragState.current.moved = true
        row.scrollLeft = dragState.current.scrollLeft - walk
    }

    // Prevent the click on a card from firing right after a drag.
    const onClickCapture = (e) => {
        if (dragState.current.moved) {
            e.preventDefault()
            e.stopPropagation()
        }
    }

    return (
        <div
            ref={rowRef}
            onMouseDown={onMouseDown}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={onMouseMove}
            onClickCapture={onClickCapture}
            className="flex flex-nowrap gap-6 overflow-x-auto cursor-grab select-none pb-2 [scrollbar-width:thin]"
        >
            {children}
        </div>
    )
}

const thumbnails = [
    "https://edumin.dexignlab.com/xhtml/images/product/1.jpg",
    "https://edumin.dexignlab.com/xhtml/images/product/8.jpg",
    "https://edumin.dexignlab.com/xhtml/images/tab/2.jpg",
    "https://edumin.dexignlab.com/xhtml/images/product/4.jpg",
]

const tags = [
    { label: 'bags', color: 'text-green-600 bg-green-50' },
    { label: 'clothes', color: 'text-red-500 bg-red-50' },
    { label: 'shoes', color: 'text-orange-500 bg-orange-50' },
    { label: 'dresses', color: 'text-emerald-500 bg-emerald-50' },
]

const sizes = ['XS', 'SM', 'MD', 'LG', 'XL']

const similarProducts = [
    { title: 'Notebook', price: 364.00, oldPrice: 259, rating: 5, image: 'https://edumin.dexignlab.com/xhtml/images/product/7.jpg' },
    { title: 'Colorful Book', price: 245.00, oldPrice: 179, rating: 5, image: 'https://edumin.dexignlab.com/xhtml/images/product/6.jpg' },
    { title: 'Project Book', price: 369.00, oldPrice: null, rating: 5, image: 'https://edumin.dexignlab.com/xhtml/images/product/5.jpg' },
    { title: 'Stapler', price: 654.00, oldPrice: null, rating: 4, image: 'https://edumin.dexignlab.com/xhtml/images/product/4.jpg' },
    { title: 'Pencils', price: 357.00, oldPrice: null, rating: 5, image: 'https://edumin.dexignlab.com/xhtml/images/product/3.jpg' },
]

const ProductDetails = () => {
    const [activeImage, setActiveImage] = useState(thumbnails[0])
    const [activeSize, setActiveSize] = useState('XS')

    return (
        <div className="w-screen h-screen bg-[#F2F2F3]">
            <Navbar />
            <Sidebar />
            <PageContainer>
                <Header parentTitle="Hi, welcome back!" subtitle="Your business dashboard template" childTitle="Shop" grandChildTitle="Product Detail" />

                <div className="bg-white rounded p-6 mt-6 flex flex-col lg:flex-row gap-8">
                    {/* Gallery */}
                    <div className="w-full lg:w-[38%]">
                        <div className="bg-[#F2F2F3] rounded flex items-center justify-center h-[380px] overflow-hidden">
                            <img src={activeImage} alt="School Bag" className="max-h-[320px] object-contain" />
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            {thumbnails.map((thumb, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(thumb)}
                                    className={`w-[80px] h-[80px] rounded bg-[#F2F2F3] overflow-hidden flex items-center justify-center border-2 transition-colors ${activeImage === thumb ? 'border-[#6a73fa]' : 'border-transparent'}`}
                                >
                                    <img src={thumb} alt="" className="max-h-[60px] object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="w-full lg:w-[62%]">
                        <h2 className="text-xl font-bold uppercase tracking-wide">School Bag</h2>

                        <div className="flex items-center gap-1 mt-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar key={i} className="text-[gold] text-[.95rem]" />
                            ))}
                        </div>

                        <p className="text-[13px] text-gray-500 mt-2">
                            (34 reviews) / <span className="underline cursor-pointer">Write a review?</span>
                        </p>

                        <h1 className="text-[#6a73fa] font-black text-[1.6rem] mt-3">$325.00</h1>

                        <div className="mt-5 space-y-2">
                            <p className="text-[#828690] text-[14px]">
                                Availability: <span className="text-black font-medium">In stock</span> <FaShoppingBasket className="inline text-black ml-1 -mt-1" />
                            </p>
                            <p className="text-[#828690] text-[14px]">
                                Product code: <span className="text-black font-medium">0405689</span>
                            </p>
                            <p className="text-[#828690] text-[14px]">
                                Brand: <span className="text-black font-medium">Lee</span>
                            </p>
                            <div className="flex items-center gap-2 text-[14px]">
                                <span className="text-[#828690]">Product tags:</span>
                                {tags.map((tag) => (
                                    <span key={tag.label} className={`px-3 py-1 rounded-full text-[12px] font-medium ${tag.color}`}>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-[#828690] text-[14px] leading-relaxed mt-5 max-w-[600px]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.
                        </p>

                        <div className="mt-6">
                            <h4 className="text-[14px] font-bold uppercase tracking-wide mb-3">Select size</h4>
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="inline-flex rounded border border-gray-200 overflow-hidden">
                                    {sizes.map((size, i) => (
                                        <button
                                            key={size}
                                            onClick={() => setActiveSize(size)}
                                            className={`w-[52px] h-[42px] text-[13px] font-semibold transition-colors ${i !== 0 ? 'border-l border-gray-200' : ''} ${activeSize === size
                                                    ? 'bg-[#6a73fa] text-white'
                                                    : 'bg-white text-gray-600 hover:bg-gray-50'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                                <button className="h-[42px] px-4 rounded bg-[#6a73fa] text-white text-[13px] font-semibold flex items-center gap-2 hover:bg-[#5a63e8] transition-colors">
                                    <FaShoppingBag /> Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="font-bold text-lg uppercase tracking-wide mt-8 mb-2">Similar products</h3>
                <DragScrollRow>
                    {similarProducts.map((product, i) => (
                        <SimilarProductCard key={i} product={product} />
                    ))}
                </DragScrollRow>

                <footer className="text-center pt-[4em] pb-[0.5em] text-sm text-gray-500">
                    <p>Copyright © Designed & Developed by <a className="text-[#6a73fa] cursor-pointer">DexignLab</a> 2023</p>
                </footer>
            </PageContainer>
        </div>
    )
}

export default ProductDetails
