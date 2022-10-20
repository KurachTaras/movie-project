import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {TvShow} from "../TvShow/TvShow";

const TvShows = () => {

    const dispatch = useDispatch();
    const {tvPopular, tvGenres} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getTvPopular())
    }, [])

    console.log(tvPopular);

    return (
        <div>
            <div className={'movies'}>
                {tvPopular.map(popular => <TvShow key={popular.id} popular={popular} />)}
            </div>
        </div>
    );
};

export {TvShows};