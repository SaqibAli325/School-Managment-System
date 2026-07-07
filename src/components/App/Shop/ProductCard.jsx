import React from 'react'
import { FaStar } from 'react-icons/fa'
const ProductCard = (props) => {
    return (
        <div className="w-[23.1%] p-5 rounded bg-white mt-8 ">
            <div className="overflow-hidden">
                <img src={props.image} alt="" className='transition-transform duration-300 ease-in-out hover:scale-140' />
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-xl font-[600] text-[1rem] uppercase mt-3">{props.product}</h4>
                <div className="flex items-center mt-2">
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                    <FaStar className='text-[gold] mr-1 mt-2 text-[.9rem]' />
                </div>
                <div className="flex items-center justify-between mt-2 gap-2">
                    <p className={`${props.oldAmount === null ? 'hidden' : ''} text-[#6a73fa] line-through mt-3`}>${props.oldAmount?.toLocaleString()}</p>
                    <h1 className='text-[#6a73fa] mt-2 font-black text-[1.4rem]'>${props.newAmount?.toLocaleString()}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductCard