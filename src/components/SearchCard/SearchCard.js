import React from 'react';
import {useNavigate} from "react-router-dom";

import StarRatings from "react-star-ratings/build/star-ratings";

const SearchCard = ({search}) => {

    const navigate = useNavigate();

    return (
        <div className={'movie_card'} onClick={() => {
            navigate(`/movies/${search?.id}`)
        }}>
            <div className={'movie_poster'}>
                <img  className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + search.poster_path} alt=""/>
            </div>
            <div className={'movie_info'}>
                {/*<button onClick={() => {*/}
                {/*    if (search?.media_type === "movie"){*/}
                {/*        navigate(search?.id.toString(), {state: {...search}})*/}
                {/*    }*/}
                {/*}}>get id</button>*/}
                <div className={'movie_ratings'}>
                    <StarRatings name={'movie_rating_star'}
                                 rating={search?.vote_average}
                                 starRatedColor={"crimson"}
                                 numberOfStars={5}
                                 starDimension={"15px"}
                    />
                </div>
                <div className={'movie_title'}>title: {search.title}</div>
            </div>
        </div>
    );
};

export {SearchCard};