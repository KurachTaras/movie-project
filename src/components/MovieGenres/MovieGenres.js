import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {MovieGenreDetails} from "../MovieGenreDetails/MovieGenreDetails";

const MovieGenres = () => {

    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [])

    return (
        <div>
            <div className={'genres'}>
                {genres.map(genre => <MovieGenreDetails key={genre.id} genre={genre} />)}
            </div>
        </div>
    );
};

export {MovieGenres};