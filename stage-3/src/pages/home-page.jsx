import React, { useEffect, useState } from "react";
import "../styles/home-page.css";
import GalleryComponent from "../components/gallery-component";
import SearchBar from "../components/search-bar-component";

function HomePage({ app }) {
    const DATA_SOURCE_NAME = "mongodb-atlas";

    const DATABASE_NAME = "sample_airbnb";
    const COLLECTION_NAME = "listingsAndReviews";

    const mongo = app.currentUser.mongoClient(DATA_SOURCE_NAME);
    const collection = mongo.db(DATABASE_NAME).collection(COLLECTION_NAME);

    const [listOfTwelveAirBnBs, setListTwelveAirBnBs] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    const fetchAirBnBs = async () => {
        try {
            const twelveAirBnBs = await collection.find(
                {},
                {
                    projection: {
                        _id: 1,
                        images: 1,
                        name: 1,
                        property_type: 1,
                    },
                    limit: 8,
                }
            );

            console.log(twelveAirBnBs);

            setListTwelveAirBnBs(twelveAirBnBs);
            setShowSpinner(false);
        } catch (error) {
            console.error(error);
            window.alert("Something went wrong!! Unable to fetch AirBnBs");
        }
    };

    const searchAirBnBs = async (query) => {
        try {
            setShowSpinner(true);

            const twelveAirBnBs = await collection.find(
                { property_type: { $regex: query } },
                {
                    projection: {
                        _id: 1,
                        images: 1,
                        name: 1,
                        property_type: 1,
                    },
                    limit: 8,
                }
            );

            console.log(twelveAirBnBs);

            setListTwelveAirBnBs(twelveAirBnBs);
            setShowSpinner(false);
        } catch (error) {
            console.log(error);
            window.alert(
                "Something went wrong!! Unable to fetch the searched AirBnBs"
            );
        }
    };

    useEffect(() => {
        fetchAirBnBs();
    }, []);

    return (
        <>
            <div id="home-page-container">
                <div id="home-page-container__Header">
                    <div id="logo-and-name-conainer">
                        <img src="logo_lottie.gif" alt="logo" />
                        <h6>ASTRO GALA_ _Y</h6>
                    </div>
                </div>

                <div id="search-cont-x">
                    <SearchBar
                        onSearch={(query) => {
                            searchAirBnBs(query);
                        }}
                    />
                </div>

                <div id="home-page-container__Body">
                    {showSpinner ? (
                        <div id="loading-spinner">
                            <img src="loading_lottie.gif" alt="Loading..." />
                        </div>
                    ) : listOfTwelveAirBnBs.length > 0 ? (
                        <GalleryComponent listOfAirBnBs={listOfTwelveAirBnBs} />
                    ) : (
                        <p style={{ textAlign: "center" }}>No matching queries found.</p>
                    )}
                </div>

                <div id="home-page-container__Footer">
                    <h4>&copy; Made By Kibet</h4>
                </div>
            </div>
        </>
    );
}

export default HomePage;
