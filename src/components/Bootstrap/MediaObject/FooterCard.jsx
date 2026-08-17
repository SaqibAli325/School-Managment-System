import React from "react";
import { CardBox, MediaItem } from "./Cards";

const listParagraph =
    "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.";

const listAvatars = [
    "https://edumin.dexignlab.com/xhtml/images/avatar/8.jpg",
    "https://edumin.dexignlab.com/xhtml/images/avatar/1.jpg",
    "https://edumin.dexignlab.com/xhtml/images/avatar/2.jpg",
];

const FooterCard = () => {
    return (
        <CardBox title="Media List">
            <div className="flex flex-col gap-6">
                {listAvatars.map((image, i) => (
                    <MediaItem
                        key={i}
                        image={image}
                        heading="List-based media object"
                        paragraphs={[listParagraph]}
                    />
                ))}
            </div>
        </CardBox>
    );
};

export default FooterCard;