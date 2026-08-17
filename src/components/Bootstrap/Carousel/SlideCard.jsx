import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiArrowRightWideLine } from "react-icons/ri";

const SlideCard = ({ title, images, id }) => {
    const [index, setIndex] = useState(0);
    console.log(id)

    const goPrev = () =>
        setIndex((current) => (current === 0 ? images.length - 1 : current - 1));

    const goNext = () =>
        setIndex((current) => (current === images.length - 1 ? 0 : current + 1));

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full">
            <h2 className="text-lg font-semibold text-gray-800 px-5 pt-5 pb-4">
                {title}
            </h2>

            <div className="relative w-full h-56 overflow-hidden">
                <img
                    src={images[index]}
                    alt={`${title} slide ${index + 1}`}
                    className="w-[90%] m-auto pb-4 h-full "
                />

                <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous slide"
                    className={`absolute left-7 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors drop-shadow-md ${id !== 2 && id !== 3 ? "block" : "hidden"}`}
                >
                    <ChevronLeft size={35} strokeWidth={1} />
                </button>

                <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next slide"
                    className={`absolute right-7 top-1/2 -translate-y-1/2 text-white/90 hover:text-white transition-colors drop-shadow-md ${id !== 2 && id !== 3 ? "block" : "hidden"}`}
                >
                    <ChevronRight size={35} strokeWidth={1} />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5  px-2 py-1.5">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-1 w-7 mb-4 transition-colors ${id !== 2 && id !== 3 ? "block" : "hidden"} ${i === index ? "bg-white" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideCard;