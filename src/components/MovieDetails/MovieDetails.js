import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import StarRatings from "react-star-ratings/build/star-ratings";
import YouTube from "react-youtube";

import {movieActions} from "../../redux";

import {Similar} from "../Similar/Similar";
import './MovieDetails.css'


const MovieDetails = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const {videos, similar, movieId, watchList, watched} = useSelector(state => state.movieReducer);

    const {id} = useParams();
    const [data, setData] = useState({});


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7cf9b0f30126c3f31e4009979a376a0f`)
            .then(value => value.json())
            .then(value => {
                setData({...value})
            })
    }, [id, movieId])

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getVideo({id: id}))
            dispatch(movieActions.getSimilar({id: id}))
        } if (movieId) {
            dispatch(movieActions.getVideo({id: movieId}))
            dispatch(movieActions.getSimilar({id: movieId}))
        }

    }, [id, movieId])

    return (

        <div className={'movieDetails_card'}>
            <div className={'movie_details_container'}>
                <div className={'movie_details-container_info'}>
                    <div className={'movie_details_title'}>
                        Title : <span className={'movie_details_span'}>{data?.title}</span>
                    </div>
                    <div className={'movie_details_status'}>
                        Status : {data?.status}
                    </div>
                </div>
                <div className={'movie_details_wrap'}>
                    <div className={'movie_details_banner'}>
                        <img className={'movie_details_poster'} src={"https://image.tmdb.org/t/p/w500/" + data?.poster_path} alt="" />
                        <div className={'movie_details_rating'}>
                            <StarRatings name={'movie_details_rating_star'}
                                         rating={data?.vote_average}
                                         starRatedColor={'yellow'}
                                         numberOfStars={5}
                                         starDimension={"29px"}
                            />
                        </div>
                        <div className={'movie_details_vote_count'}>
                            Vote count : {data?.vote_count}
                        </div>
                        <div className={'movie_details_buttons'}>
                            <button className={'movie_details_button_add'} onClick={() => {}}>
                                Add
                            </button>
                            <button className={'movie_details_button_remove'} onClick={() => {}}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className={'movie_details_content'}>
                        <div className={'details_overview'}>
                            <div className={'details_overview_wrap'}>
                                <div>Overview : </div>
                                <p>{data.overview}</p>
                            </div>
                        </div>
                        <div className={'details_tagline, details_container'}>
                            Tagline : <span className={'details_tagline_span'}>{data.tagline}</span>
                        </div>
                        <div className={'details_realise_runtime'}>
                            <div className={'details_realise'}>
                                Data resease :  {data.release_date}
                            </div>
                            <div className={'details_runtime'}>
                                <div className={'details_runtime'}>
                                    Runtime :  {data.runtime}
                                </div>
                            </div>
                        </div>
                        <div className={'details_original_language, details_container'}>
                            Original language : {data.original_language}
                        </div>
                        <div className={'details_country_container'}>
                            {data.production_countries?.map((county) => (
                                <div className={'details_country, details_container'} key={county.iso_3166_1}> Country: {county.name}</div>))}
                        </div>
                        <div className={'movie_revenue, details_container'}>
                            Revenue : {data.revenue}
                        </div>

                        <div className={'movie_trailer'}>
                            <YouTube
                                videoId={videos.key}
                                className={"youtube amru"}
                                containerClassName={"youtube-container amru"}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className={'movie_details_similar'}>
                Some similar movies
            </div>

            <div className={'movies'}>
                {
                    similar?.map(similarOne => <Similar key={similarOne.id} similarOne={similarOne} />)
                }
            </div>
        </div>
    );
};

export {MovieDetails};