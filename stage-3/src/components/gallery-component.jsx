import React from 'react';
import "../styles/gallery-component.css";
import GalleryItemComponent from "./gallery-item-component";

export default function GalleryComponent({ listOfAirBnBs }) {
    return (
        <div id="gallery-container">
            {listOfAirBnBs.map((airbnb) => (
                <GalleryItemComponent
                    key={airbnb._id} 
                    picture_url={airbnb.images.picture_url}
                    property_type={airbnb.property_type}
                />
            ))}
        </div>
    );
}
