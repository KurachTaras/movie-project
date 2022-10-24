import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const TvShow = ({popular}) => {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const {tvGenres} = useSelector(state => state.movieReducer);

    const filteredGenres = popular?.genre_ids.reduce((acc, id) => {
        const mathedGenre = tvGenres.find(genre => genre.id === id);
        if (mathedGenre) {
            acc.push(mathedGenre)
        }
        return acc;
    }, []);

    useEffect(()=> {
        dispatch(movieActions.getTvGenreList());
    }, [])

    return (
        <div className={'movie_card'} onClick={()=> {
            // navigate(`/tvShow/${popular.id}`)
            navigate(popular.id.toString(), {state: {...popular}})
        }}>
            <div className={'movie_poster'}>
                <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + popular?.poster_path } alt="" />
            </div>
            <div className={'movie_genres'}>
                {filteredGenres?.map((genre) => (
                    <div className={'movie_genre'} key={genre.id}> {genre?.name }</div>
                ))}
            </div>
            <div className={'movie_ratings'}>
                <StarRatings name={'movie_rating_star'}
                             rating={popular?.vote_average}
                             starRatedColor={"white"}
                             numberOfStars={5}
                             starDimension={"15px"}
                />
            </div>
            <div className={'movie_info'}>
                <div className={'movie_title'}>{popular?.title}</div>
            </div>
        </div>
    );
};

export {TvShow};