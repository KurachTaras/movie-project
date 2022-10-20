import React from 'react';
import {useNavigate} from "react-router-dom";


import './Movie.css'
import {baseURL, urls} from "../../configs";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const Movie = ({movie}) => {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    return (

            <div className={'movie_card'}>
                <div className={'movie_poster'}>
                <img className={'poster'} src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path } alt="" />
                </div>
                <div onClick={()=> {
                    //
                    // dispatch(movieActions.setId)
                }}> id: {movie.id}</div>
                <button onClick={() => {
                navigate(movie.id.toString(), {state: {...movie}})
                // //     navigate( dispatch(movieActions.setId(movie.id.toString(), {state: {...movie}}) ))
                //     dispatch(movieActions.setId(movie.id.toString()))
            }}>get id</button>
            <div>title: {movie.title}</div>
            </div>
    );
};

export {Movie};