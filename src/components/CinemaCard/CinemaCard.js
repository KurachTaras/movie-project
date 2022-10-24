import React from 'react';
import {useSelector} from "react-redux";
import StarRatings from "react-star-ratings/build/star-ratings";
import {useNavigate} from "react-router-dom";

const CinemaCard = ({playing}) => {

    const {genres} = useSelector(state => state.movieReducer);
    const navigate = useNavigate();

    const filteredGenres = playing?.genre_ids.reduce((acc, id) => {
        const mathedGenre = genres.find(genre => genre.id === id);
        if (mathedGenre) {
            acc.push(mathedGenre)
        }
        return acc;
    }, []);

    return (

        <div className={'movie_card'} onClick={()=> {
            navigate(`/movies/${playing.id}`)
        }}>
            <div className={'movie_poster'}>
                <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + playing?.poster_path } alt="" />
            </div>
            <div className={'movie_genres'}>
                {filteredGenres?.map((genre) => (
                    <div className={'movie_genre'} key={genre.id}> {genre?.name }</div>
                ))}
            </div>
            <div className={'movie_ratings'}>
                <StarRatings name={'movie_rating_star'}
                             rating={playing.vote_average}
                             starRatedColor={"white"}
                             numberOfStars={5}
                             starDimension={"15px"}
                />
            </div>
            <div className={'movie_info'}>
                <div className={'movie_title'}>{playing.title}</div>
            </div>
        </div>
    );
};

export {CinemaCard};