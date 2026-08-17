import React from "react";

// ---------------------------------------------
// Reusable building blocks
// ---------------------------------------------

export const CardBox = ({ title, children }) => (
    <div className="bg-white rounded shadow-sm p-5 w-full mt-5">
        <h2 className="text-lg font-semibold text-gray-800 pb-3 border-b border-gray-200 -mx-5 px-5">
            {title}
        </h2>
        <div className="mt-5">{children}</div>
    </div>
);

// One media object: avatar + heading + one or more paragraphs.
// align   -> "start" | "center" | "end"  (vertical alignment of the image)
// reverse -> put the image on the right instead of the left
// children -> an optional nested <MediaItem /> rendered indented underneath
export const MediaItem = ({
    image,
    heading,
    paragraphs = [],
    align = "start",
    reverse = false,
    children,
}) => {
    const alignClass =
        align === "center"
            ? "items-center"
            : align === "end"
                ? "items-end"
                : "items-start";

    return (
        <div>
            <div className={`flex ${alignClass} gap-4 ${reverse ? "flex-row-reverse" : ""}`}>
                <img
                    src={image}
                    alt={heading || "media"}
                    className="w-16 h-16 object-cover shrink-0"
                />
                <div>
                    {heading && (
                        <h4 className="font-semibold text-gray-800 mb-2">{heading}</h4>
                    )}
                    {paragraphs.map((text, i) => (
                        <p
                            key={i}
                            className={`text-sm text-gray-500 leading-relaxed ${i > 0 ? "mt-4" : ""}`}
                        >
                            {text}
                        </p>
                    ))}
                </div>
            </div>

            {/* nested media item, indented to line up with the parent's text */}
            {children && <div className="mt-6 ml-20">{children}</div>}
        </div>
    );
};

// ---------------------------------------------
// Placeholder copy (swap for real content later)
// ---------------------------------------------

const paragraphOne =
    "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.";

const paragraphTwo =
    "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

// ---------------------------------------------
// Top 6 boxes — all built from CardBox + MediaItem
// ---------------------------------------------

const Cards = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Media Object */}
            <CardBox title="Media Object">
                <div className="flex flex-col gap-6">
                    <MediaItem
                        image="https://edumin.dexignlab.com/xhtml/images/avatar/1.jpg"
                        heading="Media heading"
                        paragraphs={[paragraphOne]}
                    />
                    <MediaItem
                        image="https://edumin.dexignlab.com/xhtml/images/avatar/7.jpg"
                        heading="Media heading"
                        paragraphs={[paragraphOne]}
                    />
                </div>
            </CardBox>

            {/* Nesting — reuses MediaItem inside MediaItem */}
            <CardBox title="Nesting">
                <MediaItem
                    image="https://edumin.dexignlab.com/xhtml/images/avatar/2.jpg"
                    heading="Media heading"
                    paragraphs={[paragraphOne]}
                >
                    <MediaItem
                        image="https://edumin.dexignlab.com/xhtml/images/avatar/3.jpg"
                        heading="Media heading"
                        paragraphs={[paragraphOne]}
                    />
                </MediaItem>
            </CardBox>

            {/* Align Top */}
            <CardBox title="Align Top">
                <MediaItem
                    image="https://edumin.dexignlab.com/xhtml/images/avatar/4.jpg"
                    heading="Top-aligned media"
                    paragraphs={[paragraphOne, paragraphTwo]}
                    align="start"
                />
            </CardBox>

            {/* Align Center */}
            <CardBox title="Align Center">
                <MediaItem
                    image="https://edumin.dexignlab.com/xhtml/images/avatar/5.jpg"
                    heading="Center-aligned media"
                    paragraphs={[paragraphOne, paragraphTwo]}
                    align="center"
                />
            </CardBox>

            {/* Align Bottom */}
            <CardBox title="Align Bottom">
                <MediaItem
                    image="https://edumin.dexignlab.com/xhtml/images/avatar/6.jpg"
                    heading="Bottom-aligned media"
                    paragraphs={[paragraphOne, paragraphTwo]}
                    align="end"
                />
            </CardBox>

            {/* Order — image flipped to the right */}
            <CardBox title="Order">
                <MediaItem
                    image="https://edumin.dexignlab.com/xhtml/images/avatar/7.jpg"
                    heading="Media object"
                    paragraphs={[paragraphOne]}
                    reverse
                />
            </CardBox>
        </div>
    );
};

export default Cards;