import "../styles/gallery-item-component.css";

export default function GalleryItemComponent({ picture_url, property_type }) {
    return (
        <>
            <div id="gallery-item-container">
                <div id="image-container">
                    <img src={picture_url} alt="Room Image" />
                </div>

                <div>
                    <p>{property_type}</p>
                </div>
            </div>
        </>
    );
}
