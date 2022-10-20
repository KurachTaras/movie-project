import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";

const Similar = ({similarOne}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const {} = useSelector(state => state.movieReducer);

    return (
            <div className={'movie_card'}>
                <div className={'poster'}>
                    <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + similarOne.poster_path } alt="" />
                </div>
                <div onClick={()=> {
                    // navigate(similarOne.id.toString(), {state: {...similarOne}})
                    // dispatch(movieActions.setId(movie.id.toString()))
                    dispatch(movieActions.setId(similarOne.id.toString()))
                }}> id: {similarOne.id}</div>
            </div>
    );
};

export {Similar};