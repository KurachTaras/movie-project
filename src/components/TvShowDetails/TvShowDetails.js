import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {useDispatch, useSelector} from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";
import YouTube from "react-youtube";
import './TvShowDetails.css'
import {BiTime} from "react-icons/bi";
import {BsCalendarWeek} from "react-icons/bs"
import {movieActions} from "../../redux";


const TvShowDetails = () => {

    const [data, setData] = useState([]);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {tvPopularById} = useSelector(state => state.movieReducer);

    const [video, setVideo] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7cf9b0f30126c3f31e4009979a376a0f`)
            .then(value => value.json())
            .then(value => {
                setData({...value})
            })
    }, [id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=7cf9b0f30126c3f31e4009979a376a0f`)
            .then(value => value.json())
            .then(value => {
                setVideo({...value})
            })
    }, [id])

    useEffect(()=> {
        dispatch(movieActions.getTvRecommendations({id}))
    }, [id])

    const firstItem = video?.results?.splice(0, 2)[0];

    return (

        <div className={'movieDetails_card'}>
            <div className={'movie_details_container'}>
                <div className={'movie_details-container_info'}>
                    <div className={'movie_details_title'}>
                        Title : <span className={'movie_details_span'}>{data?.name}</span>
                    </div>
                    <div className={'movie_details_status'}>
                        Status : {data?.status}
                    </div>
                </div>
                <div className={'tvShow_details-container_info'}>
                    <div className={'tvShow_details_title'}>
                        Number of seasons : <span className={'movie_details_span'}>{data?.number_of_seasons}</span>
                    </div>
                    <div className={'tvShow_details_status'}>
                        Number of episodes: <span className={'movie_details_span'}>{data?.number_of_episodes}</span>
                    </div>
                </div>
                <div className={'movie_details_wrap'}>
                    <div className={'movie_details_banner'}>
                        <img className={'movie_details_poster'} src={"https://image.tmdb.org/t/p/w500/" + data?.poster_path} alt="" />
                        <div className={'movie_details_rating'}>
                            <StarRatings name={'movie_details_rating_star'}
                                         rating={data?.vote_average}
                                         starRatedColor={"white"}
                                         numberOfStars={5}
                                         starDimension={"29px"}
                            />
                        </div>
                        <div className={'movie_details_vote_count'}>
                            Vote count : <span className={'movie_details_span'}>{data?.vote_count}</span>
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
                        <div className={'details_tagline'}>
                            Tagline : <span className={'details_tagline_span'}>{data.tagline}</span>
                        </div>
                        <div className={'tvShow_realise_runtime'}>
                            <div className={'tvSHow_realise'}>
                                Data release : <BsCalendarWeek className={'tvShow_icon'} /> <span className={'movie_details_span'}>{data?.first_air_date}</span>
                            </div>
                            <div className={'tvSHow_runtime'}>
                                Episode runtime : <BiTime className={'tvShow_icon'} />  <span className={'movie_details_span'}>{data?.episode_run_time}</span>
                            </div>
                        </div>
                        <div className={'details_original_language'}>
                            Original language : {data.original_language}
                        </div>
                        <div className={'details_country_container'}>
                            {tvPopularById.production_countries?.map((county) => (
                                <div className={'details_country'} key={county.iso_3166_1}> Country: {county.name}</div>))}
                        </div>
                        <div className={'tvShow_realise_runtime'}>
                            <div className={'tvShow_popularity'}>
                                Popularity : {data?.popularity}
                            </div>
                            <div className={'tvShow_type'}>
                                Type : {data?.type}
                            </div>
                        </div>
                        <div className={'tvSHow_createdBy'}>
                           <span className={'tvSHow_createdBy_span'}>Created by :</span> {data?.created_by?.map((created) => (
                                <div className={'createdByDetails'} key={created.id}>
                                    <span className={'tvSHow_createdBy_span'}>{created?.name}</span></div>
                        ))}
                        </div>

                        <div className={'movie_trailer'}>
                            <YouTube
                                videoId={firstItem?.key}
                                className={"youtube"}
                                containerClassName={"youtube-container"}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className={'tvShow_last_one'}>
               Last episode
            </div>

            <div className={'tvShow_last_episode'}>
                <div className={'tvShow_last_episode_poster'}>
                    <img className={'tvShow_poster'} src={"https://image.tmdb.org/t/p/w500/" + data?.last_episode_to_air?.still_path} alt="" />
                </div>
                <div className={'tvShow_last_episode_info'}>
                    <div className={'tvSHow_last_episode_season_info, tvShow_details_container'}>
                        <div className={'tvShow_last_episode_season_number'}>
                            Last Season : {data?.last_episode_to_air?.season_number}
                        </div>
                        <div className={'tvShow_last'}>
                            Last Episode : {data?.last_episode_to_air?.episode_number}
                        </div>
                    </div>
                    <div className={'tvShow_last_episode_air, tvShow_details_container'}>
                        <div className={'tvShow_last_episode_air_date'}>
                            Air_date : {data?.last_episode_to_air?.air_date}
                        </div>
                        <div className={'tvShow_last_episode_number'}>
                            Episode number : {data?.last_episode_to_air?.episode_number}
                        </div>
                    </div>
                    <div className={'tvShow_last_episode_name, tvShow_details_container'}>
                        <div className={'tvShow_last_episode_n'}>
                            Name : {data?.last_episode_to_air?.name}
                        </div>
                        <div className={'tvShow_last_episode_time'}>
                            Runtime : {data?.last_episode_to_air?.runtime}
                        </div>
                    </div>
                    <div className={'tvShow_last_episode_name, tvShow_details_container'}>
                        <div className={'tvShow_last_episode_n'}>
                            Average vote : {data?.last_episode_to_air?.vote_average}
                        </div>
                        <div className={'tvShow_last_episode_time'}>
                            Vote count : {data?.last_episode_to_air?.vote_count}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export {TvShowDetails};