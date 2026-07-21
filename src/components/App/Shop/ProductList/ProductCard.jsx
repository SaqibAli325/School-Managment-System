import { FaStar } from 'react-icons/fa'

const ProductCard = ({ product }) => {
    return (
        <div className=" p-5 rounded bg-white mt-8">
            <div className="overflow-hidden">
                <img src={product.image} alt="" className='transition-transform duration-300 ease-in-out hover:scale-140' />
            </div>
            <div>
                <h4 className="text-xl font-[700] text-[1rem] uppercase mt-3 mb-2">{product.title}</h4>

                <h1 className='text-[#6a73fa] text-[22px] font-black'>{product.price}</h1>

                <div className="flex items-center mt-2 mb-3">
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                </div>

                <p className="mb-3 text-[.9rem]">
                    (34 reviews) / <span className="underline">Write a review?</span>
                </p>

                <p className="mb-3 text-[#828690]">
                    Availability: <span className="text-black text-[13px]">In Stock </span>
                </p>
                <p className="text-[#828690]">
                    Product Code: <span className="text-black text-[13px]" >0405689</span>
                </p>
                <p className="text-[#828690]">
                    Brand: <span className="text-black text-[13px]">Lee</span>
                </p>

                <p className="text-[#828690] mt-3">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                </p>

            </div>
        </div >
    )
}

export default ProductCard
