import "../styles/movie-details-component.css"
function MovieDetailsComponent({ movie }) {

    return (
        <>
            <div id="movie-video-container">
                <div id="movie-video-container__Top">
                    <video src="">

                    </video>

                </div>

                <div id="movie-video-container__Bottom" >

                    <div id="movie-video-container__Bottom-Header">
                    <div className="other-half">
                        <h4>{movie.title}</h4>
                        <p><b>.</b></p>

                    </div>

                    <div className="other-half">
                     
                        <h4>{movie.release_date}</h4>
                        <p><b>.</b></p>

                    </div>



                    <div className="other-half">
                        <h2>PG-13</h2>
                        <p><b>.</b></p>

                    </div>

                    {/* Todo("probably make a sepatate chip component that would be fed into the list of genres , while doing a map") */}

                    <div id="genre-list-container" >
                        <p className="genre">Action</p>
                        
                        <p className="genre">Drama</p>
                    </div>


                    <div id="star-ratings-cont">
                        <div id="star-icon">
                        <i class="fa-solid fa-star"></i>


                        </div>

                    <div>
                        <p>{movie.vote_average} | {movie.vote_count} </p>
                    </div>




                    </div>

                    


                    </div>


                    <div id="movie-video-container__Bottom-Left">

                        <p>{movie.overview}</p>

                        {/* Todo("map throught the participants lists and make them proper, :)" */}

                        <div id="participants-container">
                            <div id="participants-container-item"><p>Director: </p> <p> Lorem, Lorem </p> </div>

                            <div id="participants-container-item"><p>Writers:  </p> <p> Consectetur, adipiscing elit, eiusmod </p> </div>

                            <div id="participants-container-item"><p>Stars: </p> <p> Empor Incididunt, Ut Labore, Et Dolore  </p> </div>

                        </div>

                        {/* Todo("make this dynamic :)" */}

                        <div>
                            <p>Top rated movies #participants-container65</p>

                            <div>
                                <p>Awards 9 nominations</p>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>


                        <div id="show-times-container">
                        <i class="fa-solid fa-ticket"></i>

                        <p>See Showtimes</p>

                        </div>

                        <div id="watch-more-options">
                        <i class="fa-solid fa-ticket"></i>

                        <p>More watch options</p>


                        </div>


                        <div id="movie-recommendations-container">


                        </div>


                    </div>

                </div>

            </div>

        </>
    )

}

export default MovieDetailsComponent
