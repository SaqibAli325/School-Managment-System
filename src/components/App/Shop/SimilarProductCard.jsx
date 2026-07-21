import { FaStar, FaRegStar } from 'react-icons/fa'

const SimilarProductCard = ({ product }) => {
    return (
        <div className="shrink-0 w-[177px] p-5 rounded bg-white">
            <div className="overflow-hidden bg-[#F2F2F3] rounded flex items-center justify-center h-[140px]">
                <img
                    src={product.image}
                    alt={product.title}
                    draggable={false}
                    className=" object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
            </div>
            <div className="mt-4 text-center">
                <h4 className="text-[15px] font-bold uppercase tracking-wide">{product.title}</h4>
                <div className="flex items-center justify-center mt-2 gap-[2px]">
                    {Array.from({ length: 5 }).map((_, i) =>
                        i < product.rating
                            ? <FaStar key={i} className="text-[gold] text-[.85rem]" />
                            : <FaRegStar key={i} className="text-[gold] text-[.85rem]" />
                    )}
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                    {product.oldPrice && (
                        <span className="text-[#6a73fa] line-through text-[14px]">${product.oldPrice.toFixed(2)}</span>
                    )}
                </div>
                <h1 className="text-[#6a73fa] font-black text-[1.35rem] mt-1">${product.price.toFixed(2)}</h1>
            </div>
        </div>
    )
}

export default SimilarProductCard
